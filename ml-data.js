const HANDS_ON_ML_DATA = {
  title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
  author: "Aurélien Géron",
  edition: "2nd Edition",
  summary: "A comprehensive, hands-on introduction to Machine Learning and Deep Learning. Part I covers the fundamentals: supervised, unsupervised, and reinforcement learning, plus end-to-end project workflow, classification, regression, SVMs, decision trees, ensembles, and dimensionality reduction. Part II dives into neural networks using TensorFlow and Keras: training deep nets, CNNs, RNNs, NLP with Transformers, generative models, reinforcement learning, and model deployment at scale.",
  mindmap: {
    root: "Hands-On ML",
    branches: [
      {
        name: "Fundamentals",
        children: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Batch vs Online", "Instance vs Model Based"]
      },
      {
        name: "Data & Workflow",
        children: ["Frame the Problem", "EDA", "Test Set", "Feature Engineering", "Pipelines"]
      },
      {
        name: "Classic Models",
        children: ["Linear Regression", "Logistic Regression", "SVM", "Decision Trees", "Random Forests"]
      },
      {
        name: "Ensembles & Reduction",
        children: ["Voting", "Bagging", "Boosting", "PCA", "LLE", "Clustering"]
      },
      {
        name: "Neural Networks",
        children: ["Keras", "MLPs", "Activation Functions", "Backpropagation", "Optimizers"]
      },
      {
        name: "Deep Training",
        children: ["Initialization", "Batch Norm", "Dropout", "Gradient Clipping", "Transfer Learning"]
      },
      {
        name: "Vision & Sequences",
        children: ["CNNs", "Pooling", "ResNet", "RNNs", "LSTM", "Transformers"]
      },
      {
        name: "Advanced Topics",
        children: ["NLP", "GANs", "Autoencoders", "Reinforcement Learning", "TF Serving"]
      }
    ]
  },
  formulas: [
    { formula: "y = Xw + b", context: "Linear regression prediction" },
    { formula: "MSE = (1/m) Σᵢ (y⁽ⁱ⁾ − ŷ⁽ⁱ⁾)²", context: "Mean Squared Error cost function" },
    { formula: "∂MSE/∂wⱼ = (2/m) Σᵢ (ŷ⁽ⁱ⁾ − y⁽ⁱ⁾) x⽮⁽ⁱ⁾", context: "Gradient of MSE with respect to weight j" },
    { formula: "θ = (XᵀX)⁻¹ Xᵀy", context: "Normal equation closed-form solution" },
    { formula: "σ(z) = 1 / (1 + e⁻ᶻ)", context: "Sigmoid / logistic function" },
    { formula: "ReLU(z) = max(0, z)", context: "Rectified Linear Unit activation" },
    { formula: "Softmax(z)ᵢ = e^{zᵢ} / Σⱼ e^{zⱼ}", context: "Softmax for multi-class probabilities" },
    { formula: "Cross-Entropy = −Σᵢ yᵢ log(ŷᵢ)", context: "Classification loss function" },
    { formula: "H = −Σ pᵢ log₂(pᵢ)", context: "Shannon entropy used in decision trees" },
    { formula: "Gini = 1 − Σ pᵢ²", context: "Gini impurity for decision tree splits" },
    { formula: "w := w − η ∇J(w)", context: "Gradient descent weight update" },
    { formula: "w := w − η ∇J(w; x⁽ⁱ⁾, y⁽ⁱ⁾)", context: "Stochastic gradient descent update" },
    { formula: "Batch Norm: ẑ = (z − μ_B) / √(σ_B² + ε)", context: "Normalizing activations per mini-batch" },
    { formula: "Dropout: r ~ Bernoulli(p); ỹ = r ⊙ y", context: "Randomly zeroing neurons during training" },
    { formula: "Convolution: (I ∗ K)(i,j) = Σₘ Σₙ I(i+m, j+n) K(m,n)", context: "2D discrete convolution for CNNs" },
    { formula: "LSTM cell state: cₜ = fₜ ⊙ cₜ₋₁ + iₜ ⊙ c̃ₜ", context: "Long Short-Term Memory update" },
    { formula: "Attention(Q,K,V) = softmax(QKᵀ/√dₖ) V", context: "Scaled dot-product attention" },
    { formula: "Q-Learning: Q(s,a) ← Q(s,a) + α [r + γ max_a' Q(s',a') − Q(s,a)]", context: "Temporal-difference Q-value update" }
  ],
  mnemonics: [
    { concept: "Supervised vs Unsupervised", mnemonic: "Supervised = School with a teacher (labels). Unsupervised = Detective finding hidden patterns (no labels)." },
    { concept: "Batch vs Online Learning", mnemonic: "Batch = Meal prep on Sunday (train once on full data). Online = Food truck (learn continuously from each order)." },
    { concept: "Bias vs Variance", mnemonic: "High bias = too simple (underfit). High variance = too complex (overfit). Aim for the Goldilocks zone." },
    { concept: "Precision vs Recall", mnemonic: "Precision = Of predicted positives, how many are right? Recall = Of actual positives, how many did we catch?" },
    { concept: "Gradient Descent", mnemonic: "A blind hiker walking downhill: step size = learning rate, slope = gradient, valley = minimum loss." },
    { concept: "ReLU", mnemonic: "ReLU is a gatekeeper: positive numbers pass through, negatives become zero." },
    { concept: "Dropout", mnemonic: "Dropout = study group where random members skip each session so no one memorizes answers." },
    { concept: "Batch Normalization", mnemonic: "Batch Norm = adjusting exam scores so each class has the same average and spread." },
    { concept: "CNN", mnemonic: "CNN = a magnifying glass sliding over an image, looking for local features like edges and textures." },
    { concept: "LSTM", mnemonic: "LSTM = a conveyor belt (cell state) with gates deciding what to forget, store, and output." },
    { concept: "Transformer", mnemonic: "Transformer = everyone in the sentence looks at everyone else at once (self-attention), no need to read word-by-word." },
    { concept: "Random Forest", mnemonic: "Random Forest = asking a crowd of decision trees and taking a vote; wisdom of the forest." }
  ],
  chapters: [
    {
      id: "ch1",
      title: "1. The Machine Learning Landscape",
      summary: "Defines Machine Learning, explains why it is useful, surveys application examples, and introduces the major system categories: supervised/unsupervised/semisupervised/Reinforcement Learning, batch/online learning, and instance-based versus model-based learning. It also covers the main challenges: insufficient data, nonrepresentative data, poor-quality data, irrelevant features, overfitting, and underfitting.",
      flashcards: [
        { question: "What is the classic engineering definition of Machine Learning?", answer: "A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.", keywords: ["Tom Mitchell", "experience", "task", "performance measure"] },
        { question: "Name three broad categories of Machine Learning systems.", answer: "Supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning (agent learns via rewards/penalties).", keywords: ["supervised", "unsupervised", "reinforcement"] },
        { question: "What is the difference between batch and online learning?", answer: "Batch learning trains on the full dataset at once and must be retrained from scratch when new data arrives. Online learning learns incrementally, one instance or mini-batch at a time.", keywords: ["batch", "online", "incremental"] },
        { question: "What is the difference between instance-based and model-based learning?", answer: "Instance-based learning compares new data to known examples. Model-based learning detects patterns in training data to build a predictive model.", keywords: ["instance-based", "model-based", "compare", "predictive model"] },
        { question: "List three main challenges of Machine Learning.", answer: "Insufficient quantity of training data, nonrepresentative training data, and poor-quality data (noise/outliers/errors).", keywords: ["insufficient data", "nonrepresentative", "poor quality"] }
      ]
    },
    {
      id: "ch2",
      title: "2. End-to-End Machine Learning Project",
      summary: "Walks through a complete ML project using the California Housing dataset: framing the problem, selecting a performance measure, checking assumptions, creating a workspace, downloading data, exploratory data analysis, creating a test set, visualizing geographical data, looking for correlations, experimenting with attribute combinations, preparing data with transformations and pipelines, selecting and training models, fine-tuning with grid search, evaluating on the test set, and launching/monitoring the system.",
      flashcards: [
        { question: "What is the first step when framing an ML problem?", answer: "Define the business objective, how the solution will be used, and what the current non-ML solution looks like (if any).", keywords: ["business objective", "frame", "baseline"] },
        { question: "Why is creating a test set early important?", answer: "To avoid data snooping bias—if you look at the test set while exploring, your brain may overfit and you will overestimate model performance.", keywords: ["test set", "data snooping", "overfit"] },
        { question: "What is stratified sampling and when is it useful?", answer: "Stratified sampling ensures subgroups are represented in the same proportion as in the overall dataset. It is useful when a feature is important but rare.", keywords: ["stratified", "sampling", "proportions"] },
        { question: "What is feature scaling and why is it needed?", answer: "Feature scaling puts numerical features on a similar scale (e.g., min-max or standardization). Many algorithms (SVMs, neural networks, gradient descent) perform better or converge faster.", keywords: ["feature scaling", "standardization", "min-max"] },
        { question: "What is the purpose of cross-validation?", answer: "Cross-validation splits the training data into multiple folds to get a more reliable estimate of model performance and to compare models without touching the test set.", keywords: ["cross-validation", "folds", "model selection"] }
      ]
    },
    {
      id: "ch3",
      title: "3. Classification",
      summary: "Covers classification using the MNIST dataset. Topics include training binary classifiers, performance measures (accuracy, confusion matrix, precision, recall, F1 score, precision/recall trade-off, ROC curve, AUC), multiclass classification (One-vs-All, One-vs-One), error analysis, multilabel classification, and multioutput classification.",
      flashcards: [
        { question: "What is the difference between precision and recall?", answer: "Precision is the ratio of true positives among all positive predictions. Recall is the ratio of true positives among all actual positives.", keywords: ["precision", "recall", "true positives"] },
        { question: "How is the F1 score calculated?", answer: "F1 = 2 × (precision × recall) / (precision + recall). It is the harmonic mean of precision and recall.", keywords: ["F1", "harmonic mean", "precision", "recall"] },
        { question: "What does the ROC curve plot?", answer: "True Positive Rate (recall) against False Positive Rate at various classification thresholds.", keywords: ["ROC", "TPR", "FPR", "threshold"] },
        { question: "What is the One-vs-All strategy for multiclass classification?", answer: "Train one binary classifier per class, where the class is positive and all others are negative. Pick the classifier with the highest score.", keywords: ["One-vs-All", "OvA", "multiclass"] },
        { question: "What is multilabel classification?", answer: "Each instance can be assigned multiple labels. For example, a photo may contain both a cat and a dog.", keywords: ["multilabel", "multiple labels", "instance"] }
      ]
    },
    {
      id: "ch4",
      title: "4. Training Models",
      summary: "Explains how linear regression, polynomial regression, logistic regression, and softmax regression work. Covers the normal equation, gradient descent variants (batch, stochastic, mini-batch), learning rate schedules, polynomial features, learning curves, regularization (Ridge, Lasso, Elastic Net), and early stopping.",
      flashcards: [
        { question: "What is the normal equation used for?", answer: "It computes the closed-form solution for linear regression weights: θ = (XᵀX)⁻¹ Xᵀy.", keywords: ["normal equation", "closed-form", "linear regression"] },
        { question: "What is the main difference between batch and stochastic gradient descent?", answer: "Batch gradient descent uses the entire training set for each update. Stochastic gradient descent uses a single random instance.", keywords: ["batch", "stochastic", "full data", "single instance"] },
        { question: "What is the effect of adding polynomial features to linear regression?", answer: "It allows the model to fit nonlinear relationships by creating new features that are powers and interactions of original features.", keywords: ["polynomial", "nonlinear", "feature engineering"] },
        { question: "How does Ridge regularization differ from Lasso?", answer: "Ridge (L2) adds the squared magnitude of weights to the cost, shrinking them. Lasso (L1) adds absolute values and can drive some weights to exactly zero, performing feature selection.", keywords: ["Ridge", "Lasso", "L2", "L1", "regularization"] },
        { question: "What is early stopping?", answer: "Stop training as soon as validation error reaches a minimum to prevent overfitting.", keywords: ["early stopping", "validation", "overfitting"] }
      ]
    },
    {
      id: "ch5",
      title: "5. Support Vector Machines",
      summary: "Introduces SVMs for linear and nonlinear classification and regression. Covers hard-margin and soft-margin classification, the kernel trick (polynomial and RBF kernels), SVM classes in Scikit-Learn, SVM regression, and online SVMs.",
      flashcards: [
        { question: "What is the goal of a Support Vector Machine classifier?", answer: "Find the hyperplane that maximizes the margin between the two classes while tolerating some violations in soft-margin SVMs.", keywords: ["SVM", "margin", "hyperplane"] },
        { question: "What is the kernel trick?", answer: "It maps features into a higher-dimensional space implicitly using a kernel function, allowing nonlinear decision boundaries without computing the mapping directly.", keywords: ["kernel trick", "nonlinear", "higher dimension"] },
        { question: "What is the role of the C hyperparameter in a soft-margin SVM?", answer: "C controls the trade-off between a wide margin and allowing margin violations. Smaller C = wider margin, more violations. Larger C = fewer violations, narrower margin.", keywords: ["C", "soft margin", "trade-off"] },
        { question: "Name two common SVM kernels.", answer: "Polynomial kernel and Radial Basis Function (RBF) / Gaussian kernel.", keywords: ["polynomial", "RBF", "Gaussian", "kernel"] },
        { question: "Can SVMs be used for regression?", answer: "Yes. SVM Regression tries to fit as many instances as possible on a street (margin) while limiting margin violations.", keywords: ["SVR", "regression", "margin"] }
      ]
    },
    {
      id: "ch6",
      title: "6. Decision Trees",
      summary: "Explains decision trees: training, visualizing, making predictions, estimating class probabilities, the CART training algorithm, Gini impurity vs entropy, regularization hyperparameters, regression trees, and instability.",
      flashcards: [
        { question: "What algorithm does Scikit-Learn use to train decision trees?", answer: "CART (Classification and Regression Tree) algorithm, which produces binary trees using Gini impurity or entropy.", keywords: ["CART", "binary tree", "Gini", "entropy"] },
        { question: "What is Gini impurity?", answer: "Gini = 1 − Σ pᵢ². It measures the probability that a randomly chosen instance would be incorrectly classified if labeled randomly according to class distribution.", keywords: ["Gini", "impurity", "classification"] },
        { question: "How does a decision tree make predictions?", answer: "It routes an instance down the tree by answering feature-threshold questions at each node until a leaf provides the prediction.", keywords: ["decision tree", "node", "leaf", "threshold"] },
        { question: "What are regularization hyperparameters for decision trees?", answer: "max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes, etc. They restrict tree growth to reduce overfitting.", keywords: ["max_depth", "min_samples", "regularization", "overfitting"] },
        { question: "Why are decision trees unstable?", answer: "Small changes in training data can lead to very different trees because splits are chosen greedily and boundaries are axis-aligned.", keywords: ["unstable", "greedy", "axis-aligned"] }
      ]
    },
    {
      id: "ch7",
      title: "7. Ensemble Learning and Random Forests",
      summary: "Covers ensemble methods: voting classifiers, bagging and pasting, random forests, boosting (AdaBoost, Gradient Boosting), stacking, and out-of-bag evaluation. Emphasizes that ensembles of diverse, well-tuned models often outperform individual models.",
      flashcards: [
        { question: "What is a voting classifier?", answer: "An ensemble that aggregates predictions from multiple classifiers and predicts the class with the most votes (hard voting) or highest average probability (soft voting).", keywords: ["voting classifier", "hard voting", "soft voting"] },
        { question: "What is the difference between bagging and pasting?", answer: "Bagging samples training instances with replacement. Pasting samples without replacement.", keywords: ["bagging", "pasting", "bootstrap", "sampling"] },
        { question: "How does a Random Forest differ from bagging decision trees?", answer: "Random Forest uses bagging but also randomly selects a subset of features at each split, increasing tree diversity.", keywords: ["random forest", "feature subset", "diversity"] },
        { question: "What is boosting?", answer: "Boosting trains predictors sequentially, with each new predictor focusing on the mistakes of its predecessor.", keywords: ["boosting", "sequential", "mistakes"] },
        { question: "What is stacking?", answer: "Stacking trains a meta-learner (blender) to combine the predictions of several base models, instead of using simple voting.", keywords: ["stacking", "meta-learner", "blender", "base models"] }
      ]
    },
    {
      id: "ch8",
      title: "8. Dimensionality Reduction",
      summary: "Discusses the curse of dimensionality and techniques to reduce dimensionality: PCA and its variants (randomized, incremental, kernel), LLE, and other methods like t-SNE and autoencoders. Covers choosing the right number of dimensions and using PCA for compression.",
      flashcards: [
        { question: "What is the curse of dimensionality?", answer: "As the number of features grows, data becomes sparse and distance-based algorithms suffer because training instances are far apart.", keywords: ["curse of dimensionality", "sparse", "distance"] },
        { question: "How does PCA work?", answer: "PCA identifies the axes (principal components) that capture the most variance in the data and projects the data onto a lower-dimensional subspace.", keywords: ["PCA", "principal components", "variance", "projection"] },
        { question: "What is the difference between randomized PCA and incremental PCA?", answer: "Randomized PCA is faster for large datasets by approximating components. Incremental PCA processes data in mini-batches, allowing online learning.", keywords: ["randomized PCA", "incremental PCA", "mini-batches"] },
        { question: "What is Kernel PCA used for?", answer: "Kernel PCA performs nonlinear dimensionality reduction by mapping data to a higher-dimensional space and then applying PCA.", keywords: ["Kernel PCA", "nonlinear", "kernel"] },
        { question: "What is LLE?", answer: "Locally Linear Embedding is a manifold learning technique that preserves local linear relationships between neighbors when reducing dimensions.", keywords: ["LLE", "manifold learning", "local relationships"] }
      ]
    },
    {
      id: "ch9",
      title: "9. Unsupervised Learning Techniques",
      summary: "Explores clustering (K-Means, DBSCAN, HCA), Gaussian mixtures, anomaly detection, and density estimation. Includes selecting the number of clusters, limits of K-Means, using clustering for image segmentation, and semi-supervised learning with clustering.",
      flashcards: [
        { question: "How does K-Means clustering work?", answer: "K-Means partitions data into k clusters by iteratively assigning each instance to the nearest centroid and updating centroids to the mean of assigned instances.", keywords: ["K-Means", "centroid", "cluster", "iterative"] },
        { question: "What is the elbow method?", answer: "A heuristic to choose k by plotting inertia (within-cluster sum of squares) versus k and looking for an elbow where improvement slows.", keywords: ["elbow method", "inertia", "k"] },
        { question: "What are the main limits of K-Means?", answer: "It assumes spherical clusters of similar size, can converge to local minima, and requires specifying k.", keywords: ["K-Means limits", "spherical", "local minima", "k"] },
        { question: "What is DBSCAN good at?", answer: "DBSCAN can find arbitrarily shaped clusters and identifies outliers as noise, without requiring the number of clusters.", keywords: ["DBSCAN", "arbitrary shapes", "outliers", "noise"] },
        { question: "What is a Gaussian Mixture Model?", answer: "A probabilistic model that assumes data is generated from a mixture of Gaussian distributions. It can be used for clustering and density estimation.", keywords: ["GMM", "Gaussian mixture", "probabilistic", "density"] }
      ]
    },
    {
      id: "ch10",
      title: "10. Introduction to Artificial Neural Networks with Keras",
      summary: "Introduces biological and artificial neurons, activation functions, the perceptron, MLPs, backpropagation, and training neural networks with Keras. Covers the Sequential and Functional APIs, compiling, training, evaluating, using callbacks, TensorBoard, and fine-tuning hyperparameters.",
      flashcards: [
        { question: "What is the role of an activation function in a neuron?", answer: "It introduces nonlinearity, allowing the network to learn complex patterns. Without it, a multi-layer network would be equivalent to a linear model.", keywords: ["activation function", "nonlinearity", "neuron"] },
        { question: "What is backpropagation?", answer: "Backpropagation computes gradients of the loss with respect to each weight using the chain rule, starting from the output layer and moving backward.", keywords: ["backpropagation", "gradient", "chain rule", "weights"] },
        { question: "What is the difference between the Keras Sequential and Functional APIs?", answer: "Sequential is a linear stack of layers. Functional is more flexible and supports shared layers, multiple inputs/outputs, and non-linear topologies.", keywords: ["Sequential", "Functional", "Keras", "API"] },
        { question: "What are callbacks in Keras?", answer: "Callbacks are functions called during training to perform actions like saving checkpoints, early stopping, or logging to TensorBoard.", keywords: ["callbacks", "checkpoint", "early stopping", "TensorBoard"] },
        { question: "What is TensorBoard used for?", answer: "TensorBoard visualizes training metrics, model graphs, embeddings, and histograms during and after training.", keywords: ["TensorBoard", "visualization", "metrics", "graphs"] }
      ]
    },
    {
      id: "ch11",
      title: "11. Training Deep Neural Networks",
      summary: "Discusses problems in deep network training: vanishing/exploding gradients, poor initialization (Glorot/He), saturating activation functions, batch normalization, gradient clipping, reusing pretrained layers, transfer learning, faster optimizers (Momentum, AdaGrad, RMSProp, Adam), learning rate scheduling, regularization (l1/l2, dropout, max-norm), and practical recommendations.",
      flashcards: [
        { question: "What causes the vanishing gradients problem?", answer: "Gradients become very small in early layers as they are multiplied by many small derivatives during backpropagation, slowing or stopping learning.", keywords: ["vanishing gradients", "early layers", "derivatives"] },
        { question: "What is He initialization designed for?", answer: "He initialization sets initial weights with variance scaled by 2/fan_in, designed for ReLU activations to avoid vanishing/exploding gradients.", keywords: ["He initialization", "ReLU", "variance", "fan_in"] },
        { question: "What does Batch Normalization do?", answer: "It normalizes and scales activations for each mini-batch, reducing internal covariate shift and often allowing higher learning rates.", keywords: ["Batch Normalization", "mini-batch", "internal covariate shift"] },
        { question: "What is transfer learning?", answer: "Reusing weights from a pretrained model (usually trained on a large dataset) and fine-tuning on a new, often smaller, task.", keywords: ["transfer learning", "pretrained", "fine-tuning"] },
        { question: "What is the Adam optimizer?", answer: "Adam combines momentum (exponential moving average of gradients) and RMSProp (exponential moving average of squared gradients) with bias correction.", keywords: ["Adam", "momentum", "RMSProp", "adaptive"] }
      ]
    },
    {
      id: "ch12",
      title: "12. Custom Models and Training with TensorFlow",
      summary: "Dives into TensorFlow internals: tensors, variables, operations, autodiff, custom loss functions, metrics, layers, models, and training loops. Covers saving/loading models with custom components, TF functions, AutoGraph, and tracing.",
      flashcards: [
        { question: "What is a TensorFlow tensor?", answer: "A multi-dimensional array that can hold numerical data and flow through a computational graph. Tensors are immutable.", keywords: ["tensor", "multi-dimensional", "immutable"] },
        { question: "What is tf.Variable used for?", answer: "tf.Variable represents mutable state, typically used for model weights that are updated during training.", keywords: ["tf.Variable", "mutable", "weights"] },
        { question: "How does TensorFlow's autodiff (GradientTape) work?", answer: "GradientTape records operations on variables during the forward pass so gradients can be computed automatically in the backward pass.", keywords: ["GradientTape", "autodiff", "gradients"] },
        { question: "What is a tf.function?", answer: "A decorator that converts a Python function into a TensorFlow graph for faster execution. AutoGraph converts Python control flow into graph operations.", keywords: ["tf.function", "graph", "AutoGraph", "performance"] },
        { question: "Why create custom Keras layers or models?", answer: "For research or special architectures not covered by built-in layers, such as custom attention mechanisms or loss terms.", keywords: ["custom layer", "custom model", "architecture"] }
      ]
    },
    {
      id: "ch13",
      title: "13. Loading and Preprocessing Data with TensorFlow",
      summary: "Covers the TensorFlow Data API (tf.data): creating datasets, transformations, shuffling, batching, prefetching, interleaving, TFRecords, protobuf, parsing examples, handling images, text preprocessing, and feature columns for structured data.",
      flashcards: [
        { question: "What is the purpose of the tf.data API?", answer: "It builds efficient input pipelines for loading, transforming, batching, and prefetching data, removing I/O bottlenecks during training.", keywords: ["tf.data", "pipeline", "prefetch", "batch"] },
        { question: "What does prefetching do?", answer: "Prefetching overlaps data preprocessing and model execution so the GPU/CPU is not idle while waiting for the next batch.", keywords: ["prefetch", "overlap", "GPU", "CPU"] },
        { question: "What is a TFRecord file?", answer: "A binary file format optimized for TensorFlow that stores serialized tf.train.Example protobuf records.", keywords: ["TFRecord", "protobuf", "binary", "Example"] },
        { question: "Why use interleave in tf.data?", answer: "Interleave reads multiple files in parallel and interleaves their records, improving throughput for many small files.", keywords: ["interleave", "parallel", "throughput"] },
        { question: "What are feature columns used for?", answer: "Feature columns map raw structured data (numeric, categorical, crossed features) into a format suitable for a neural network.", keywords: ["feature columns", "categorical", "structured data"] }
      ]
    },
    {
      id: "ch14",
      title: "14. Deep Computer Vision with Convolutional Neural Networks",
      summary: "Explains convolutional layers, filters, feature maps, pooling, CNN architectures (LeNet-5, AlexNet, GoogLeNet, VGGNet, ResNet, Xception, SENet), object detection, semantic segmentation, and implementing CNNs in TensorFlow.",
      flashcards: [
        { question: "What is a convolutional layer?", answer: "A layer that applies learnable filters across the input to detect local features such as edges, textures, and shapes.", keywords: ["convolutional layer", "filter", "local features"] },
        { question: "What is the purpose of pooling layers?", answer: "Pooling reduces spatial dimensions, making the network more computationally efficient and translation-invariant.", keywords: ["pooling", "downsampling", "translation invariance"] },
        { question: "What problem does ResNet solve?", answer: "ResNet uses skip connections to mitigate the vanishing gradients problem and allows training of very deep networks.", keywords: ["ResNet", "skip connections", "vanishing gradients", "deep"] },
        { question: "What is a 1×1 convolution used for?", answer: "It reduces or increases the number of feature maps (bottleneck layer) and adds nonlinearity cheaply.", keywords: ["1x1 convolution", "bottleneck", "feature maps"] },
        { question: "What is the difference between object detection and semantic segmentation?", answer: "Object detection locates and classifies objects with bounding boxes. Semantic segmentation classifies every pixel into a class.", keywords: ["object detection", "semantic segmentation", "bounding box", "pixel"] }
      ]
    },
    {
      id: "ch15",
      title: "15. Processing Sequences Using RNNs and CNNs",
      summary: "Introduces recurrent neural networks (RNNs), LSTM, GRU, bidirectional RNNs, and using 1D convolutions for sequences. Covers sequence-to-sequence models, beam search, and the basics of attention.",
      flashcards: [
        { question: "What is a recurrent neural network (RNN)?", answer: "A network with loops that maintains a hidden state, allowing it to process sequences of variable length.", keywords: ["RNN", "hidden state", "sequence", "loops"] },
        { question: "What problem do LSTM networks solve?", answer: "LSTMs use gating mechanisms to better capture long-term dependencies and mitigate vanishing gradients in standard RNNs.", keywords: ["LSTM", "long-term dependencies", "gates"] },
        { question: "What is a bidirectional RNN?", answer: "It processes the sequence both forward and backward, combining context from past and future tokens.", keywords: ["bidirectional RNN", "forward", "backward", "context"] },
        { question: "What is beam search?", answer: "Beam search keeps the top-k most likely partial sequences at each step instead of greedy decoding, improving sequence generation quality.", keywords: ["beam search", "top-k", "decoding", "generation"] },
        { question: "Can CNNs be used for sequence data?", answer: "Yes. 1D convolutions can detect local patterns in sequences and are often faster to train than RNNs.", keywords: ["1D CNN", "sequence", "local patterns"] }
      ]
    },
    {
      id: "ch16",
      title: "16. Natural Language Processing with RNNs and Attention",
      summary: "Covers text preprocessing, word embeddings (Word2Vec, GloVe), RNNs for sentiment analysis, encoder-decoder architectures, attention mechanisms, the Transformer architecture, and recent language models.",
      flashcards: [
        { question: "What is a word embedding?", answer: "A dense vector representation of a word that captures semantic meaning, where similar words are close in vector space.", keywords: ["word embedding", "dense vector", "semantics"] },
        { question: "What is the Transformer architecture based on?", answer: "Self-attention mechanisms that relate each token to every other token in parallel, without recurrence or convolution.", keywords: ["Transformer", "self-attention", "parallel"] },
        { question: "What is the attention mechanism in sequence models?", answer: "It allows the decoder to focus on relevant parts of the input sequence when generating each output token.", keywords: ["attention", "decoder", "focus", "alignment"] },
        { question: "What is masking in NLP models?", answer: "Masking prevents the model from attending to padding tokens or future tokens during training.", keywords: ["masking", "padding", "future tokens"] },
        { question: "What is an encoder-decoder architecture used for?", answer: "Sequence-to-sequence tasks such as machine translation, where the encoder compresses the input and the decoder generates the output.", keywords: ["encoder-decoder", "seq2seq", "translation"] }
      ]
    },
    {
      id: "ch17",
      title: "17. Representation Learning and Generative Learning Using Autoencoders and GANs",
      summary: "Discusses autoencoders (undercomplete, denoising, sparse, variational), GANs, style transfer, and deep convolutional GANs. Covers training tricks and applications of generative models.",
      flashcards: [
        { question: "What is an autoencoder?", answer: "A neural network trained to copy its input to its output through a compressed latent representation, learning efficient encodings.", keywords: ["autoencoder", "encoder", "decoder", "latent"] },
        { question: "What is a Variational Autoencoder (VAE)?", answer: "A generative autoencoder that learns a probability distribution over latent variables, allowing generation of new samples.", keywords: ["VAE", "variational", "generative", "latent distribution"] },
        { question: "What are the two main components of a GAN?", answer: "A generator that creates fake samples and a discriminator that tries to distinguish real from fake samples.", keywords: ["GAN", "generator", "discriminator", "adversarial"] },
        { question: "What is mode collapse in GANs?", answer: "When the generator produces limited varieties of outputs, collapsing to a few modes of the real data distribution.", keywords: ["mode collapse", "generator", "limited variety"] },
        { question: "How can autoencoders be used for denoising?", answer: "Denoising autoencoders are trained to reconstruct clean inputs from corrupted versions, learning robust features.", keywords: ["denoising autoencoder", "corrupted", "reconstruct"] }
      ]
    },
    {
      id: "ch18",
      title: "18. Reinforcement Learning",
      summary: "Introduces RL concepts: agent, environment, state, action, reward, policy, value function, Markov Decision Processes, Q-Learning, approximate Q-Learning, Deep Q-Networks, policy gradients, and TF-Agents.",
      flashcards: [
        { question: "What is reinforcement learning?", answer: "An agent learns to make decisions by performing actions in an environment to maximize cumulative reward over time.", keywords: ["reinforcement learning", "agent", "environment", "reward"] },
        { question: "What is the credit assignment problem?", answer: "Determining which actions in a sequence led to a particular reward, especially when rewards are delayed.", keywords: ["credit assignment", "delayed reward", "actions"] },
        { question: "What is Q-Learning?", answer: "A model-free RL algorithm that learns the value Q(s,a) of taking action a in state s, using the Bellman equation.", keywords: ["Q-Learning", "Q-value", "Bellman", "model-free"] },
        { question: "What is a Markov Decision Process (MDP)?", answer: "A mathematical framework modeling decision making where outcomes are partly random and partly under the agent's control.", keywords: ["MDP", "Markov", "decision process", "random"] },
        { question: "What is Deep Q-Learning (DQN)?", answer: "DQN uses a neural network to approximate Q-values, enabling RL on high-dimensional state spaces like Atari games.", keywords: ["DQN", "Deep Q-Network", "neural network", "Atari"] }
      ]
    },
    {
      id: "ch19",
      title: "19. Training and Deploying TensorFlow Models at Scale",
      summary: "Covers distributing TensorFlow across devices and servers, data parallelism, model parallelism, the Distribution Strategies API, training on TF clusters, deploying with TF Serving, running on mobile/edge with TFLite, and using Google Cloud AI Platform.",
      flashcards: [
        { question: "What is data parallelism?", answer: "Each device holds a copy of the model and processes a different subset of data; gradients are averaged across devices.", keywords: ["data parallelism", "model replica", "gradients", "average"] },
        { question: "What is model parallelism?", answer: "Different parts of the model are placed on different devices, useful when the model is too large for one device.", keywords: ["model parallelism", "layers", "devices", "large model"] },
        { question: "What is TF Serving?", answer: "A flexible, high-performance serving system for deploying TensorFlow models in production.", keywords: ["TF Serving", "deployment", "production"] },
        { question: "What is TensorFlow Lite (TFLite)?", answer: "A framework for converting and deploying TensorFlow models on mobile, embedded, and edge devices.", keywords: ["TFLite", "mobile", "edge", "deployment"] },
        { question: "What does the Distribution Strategies API do?", answer: "It abstracts distributed training so the same code can run on one GPU, multiple GPUs, or a cluster with minimal changes.", keywords: ["Distribution Strategies", "distributed", "GPU", "cluster"] }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) module.exports = HANDS_ON_ML_DATA;
