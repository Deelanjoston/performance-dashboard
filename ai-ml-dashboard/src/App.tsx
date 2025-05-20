import DashboardLayout from './layouts/DashboardLayout';
import SummaryCard from './components/dashboard/SummaryCard';
import LineChart from './components/charts/LineChart';
import BarChart from './components/charts/BarChart';
import HeatMap from './components/charts/HeatMap';
import PredictionsTable from './components/dashboard/PredictionsTable';
import HorizontalBarChart from './components/charts/HorizontalBarChart';

import {
  summaryMetrics,
  performanceData,
  trainingData,
  modelComparisonData,
  confusionMatrixData,
  confusionMatrixLabels,
  recentPredictions,
  resourceUsageData,
  featureImportanceData,
} from './data/mockData';

function App() {
  return (
    <DashboardLayout>
      <div className="pb-5 border-b border-gray-200 dark:border-gray-700 sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate">
          ML Model Performance Dashboard
        </h1>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Deploy Model
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Generate Report
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {summaryMetrics.map((metric) => (
            <SummaryCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={metric.icon}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <LineChart data={performanceData} title="Model Performance Over Time" />
        <LineChart data={trainingData} title="Training & Validation Loss" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <BarChart data={modelComparisonData} title="Model Comparison" />
        <LineChart data={resourceUsageData} title="Resource Usage" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <HeatMap
          data={confusionMatrixData}
          labels={confusionMatrixLabels}
          title="Confusion Matrix"
        />
        <HorizontalBarChart data={featureImportanceData} title="Feature Importance" />
      </div>

      <div className="mt-8">
        <PredictionsTable predictions={recentPredictions} title="Recent Predictions" />
      </div>
    </DashboardLayout>
  );
}

export default App;
