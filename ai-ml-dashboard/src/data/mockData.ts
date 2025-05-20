// Mock data for AI/ML Dashboard

// Summary metrics
export const summaryMetrics = [
  {
    id: 1,
    title: 'Model Accuracy',
    value: '94.8%',
    change: '+2.3%',
    isPositive: true,
    icon: 'accuracy',
  },
  {
    id: 2,
    title: 'F1 Score',
    value: '0.92',
    change: '+0.04',
    isPositive: true,
    icon: 'f1Score',
  },
  {
    id: 3,
    title: 'Inference Time',
    value: '24ms',
    change: '-6ms',
    isPositive: true,
    icon: 'time',
  },
  {
    id: 4,
    title: 'Training Cost',
    value: '$234.56',
    change: '+$12.30',
    isPositive: false,
    icon: 'cost',
  },
];

// Performance over time data
export const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Model A',
      data: [88.5, 89.2, 89.8, 91.3, 92.5, 93.8, 94.8],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Model B',
      data: [86.2, 87.5, 88.1, 88.9, 89.6, 90.2, 91.7],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Baseline',
      data: [82.0, 82.5, 83.0, 83.2, 83.5, 83.7, 84.0],
      borderColor: '#6b7280',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      tension: 0.4,
      borderDash: [5, 5],
    },
  ],
};

// Training metrics data
export const trainingData = {
  labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5', 'Epoch 6', 'Epoch 7', 'Epoch 8'],
  datasets: [
    {
      label: 'Training Loss',
      data: [0.82, 0.63, 0.48, 0.32, 0.25, 0.18, 0.15, 0.12],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Validation Loss',
      data: [0.85, 0.67, 0.54, 0.43, 0.38, 0.35, 0.34, 0.33],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
    },
  ],
};

// Model comparison data
export const modelComparisonData = {
  labels: ['Accuracy', 'Precision', 'Recall', 'F1 Score', 'AUC'],
  datasets: [
    {
      label: 'Model A',
      data: [94.8, 92.5, 91.7, 92.1, 96.3],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
    },
    {
      label: 'Model B',
      data: [91.7, 90.2, 89.5, 89.8, 93.5],
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
    },
    {
      label: 'Model C',
      data: [89.2, 88.5, 86.9, 87.7, 91.2],
      backgroundColor: 'rgba(249, 115, 22, 0.7)',
    },
  ],
};

// Confusion matrix data
export const confusionMatrixData = [
  [215, 12, 2, 1, 0],
  [7, 198, 5, 0, 0],
  [3, 8, 227, 2, 0],
  [0, 1, 4, 205, 5],
  [0, 0, 2, 6, 192],
];

export const confusionMatrixLabels = ['Class A', 'Class B', 'Class C', 'Class D', 'Class E'];

// Recent predictions data
export const recentPredictions = [
  {
    id: 1,
    input: 'Image #2458',
    prediction: 'Class A',
    confidence: '98.2%',
    actual: 'Class A',
    timestamp: '2 mins ago',
    status: 'correct' as const,
  },
  {
    id: 2,
    input: 'Image #2459',
    prediction: 'Class B',
    confidence: '94.5%',
    actual: 'Class B',
    timestamp: '5 mins ago',
    status: 'correct' as const,
  },
  {
    id: 3,
    input: 'Image #2460',
    prediction: 'Class A',
    confidence: '72.1%',
    actual: 'Class C',
    timestamp: '12 mins ago',
    status: 'incorrect' as const,
  },
  {
    id: 4,
    input: 'Image #2461',
    prediction: 'Class D',
    confidence: '89.7%',
    actual: 'Class D',
    timestamp: '18 mins ago',
    status: 'correct' as const,
  },
  {
    id: 5,
    input: 'Image #2462',
    prediction: 'Class E',
    confidence: '95.3%',
    actual: 'Class E',
    timestamp: '24 mins ago',
    status: 'correct' as const,
  },
];

// System resources data
export const resourceUsageData = {
  labels: ['12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
  datasets: [
    {
      label: 'GPU Usage',
      data: [65, 72, 86, 92, 75, 83, 78],
      borderColor: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Memory Usage',
      data: [48, 56, 73, 85, 82, 76, 68],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
    },
    {
      label: 'CPU Usage',
      data: [35, 42, 58, 67, 62, 55, 48],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
    },
  ],
};

// Feature importance data
export const featureImportanceData = {
  labels: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6',
    'Feature 7',
    'Feature 8',
    'Feature 9',
    'Feature 10',
  ],
  datasets: [
    {
      label: 'Importance',
      data: [0.32, 0.27, 0.21, 0.18, 0.15, 0.12, 0.09, 0.07, 0.05, 0.03],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(55, 65, 81, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(20, 184, 166, 0.8)',
        'rgba(168, 85, 247, 0.8)',
      ],
    },
  ],
};
