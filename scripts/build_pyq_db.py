#!/usr/bin/env python3
"""
Build pyq-database.json from ICSE previous-year question papers.

Scans the source folder (default: ~/sam/ICSE) and writes a JSON database
with one record per PDF. The database is intended to be loaded by the
Argus FlipLearn app so users can browse, filter, and open PYQs.
"""
import json
import os
import re
import sys
from pathlib import Path

SOURCE_DIR = Path.home() / "sam" / "ICSE"
OUT_FILE = Path(__file__).resolve().parent.parent / "pyq-database.json"

SUBJECT_MAP = {
    "BIO": "Biology",
    "CHEM": "Chemistry",
    "COMP": "Computer Applications",
    "ENG1": "English Language",
    "ENG2": "English Literature",
    "GEO": "Geography",
    "HISTCIV": "History & Civics",
    "KAN": "Kannada",
    "MATH": "Mathematics",
    "PHY": "Physics",
    "school": "School Papers",
}


def parse_year(filename: str):
    """Extract a year or special marker from a filename."""
    # Explicit years
    m = re.search(r"\b(20\d{2})\b", filename)
    if m:
        return int(m.group(1))
    # Specimen / sample papers
    low = filename.lower()
    if "specimen" in low:
        return "Specimen"
    if "improvement" in low:
        return "Improvement"
    if "semester" in low:
        return "Semester"
    return "Unknown"


def parse_paper_code(filename: str):
    """Try to extract a paper code like 501, 523, etc."""
    m = re.search(r"\b(\d{3})\b", filename)
    return m.group(1) if m else None


def main():
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else SOURCE_DIR
    if not source.exists():
        print(f"Source directory not found: {source}", file=sys.stderr)
        sys.exit(1)

    records = []
    seen = set()
    for subject_dir in sorted(source.iterdir()):
        if not subject_dir.is_dir():
            continue
        subject_code = subject_dir.name.upper()
        subject_name = SUBJECT_MAP.get(subject_code, subject_code.title())
        for pdf in sorted(subject_dir.glob("*.pdf")):
            if pdf.name == ".DS_Store":
                continue
            key = f"{subject_code}/{pdf.name}"
            if key in seen:
                continue
            seen.add(key)
            records.append({
                "id": f"{subject_code.lower()}-{len(records) + 1:04d}",
                "subjectCode": subject_code,
                "subject": subject_name,
                "year": parse_year(pdf.name),
                "paperCode": parse_paper_code(pdf.name),
                "title": pdf.stem.replace("-", " ").replace("_", " ").strip(),
                "filename": pdf.name,
                # Path the app should use once files are copied under assets/pyqs/
                "assetPath": f"assets/pyqs/{subject_code}/{pdf.name}",
                "sourcePath": str(pdf),
            })

    records.sort(key=lambda r: (r["subject"], str(r["year"]), r["title"]))
    OUT_FILE.write_text(json.dumps({
        "count": len(records),
        "subjects": sorted({r["subject"] for r in records}),
        "years": sorted({str(r["year"]) for r in records}),
        "papers": records,
    }, indent=2))
    print(f"Wrote {len(records)} PYQ records to {OUT_FILE}")


if __name__ == "__main__":
    main()
