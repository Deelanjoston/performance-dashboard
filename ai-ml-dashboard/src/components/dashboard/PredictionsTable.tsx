import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface Prediction {
  id: number;
  input: string;
  prediction: string;
  confidence: string;
  actual: string;
  timestamp: string;
  status: 'correct' | 'incorrect';
}

interface PredictionsTableProps {
  predictions: Prediction[];
  title: string;
}

export default function PredictionsTable({ predictions, title }: PredictionsTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Input
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Prediction
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Confidence
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Actual
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {predictions.map((prediction) => (
              <tr key={prediction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {prediction.input}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {prediction.prediction}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  <div className="relative w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-full ${
                        prediction.status === 'correct'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      }`}
                      style={{
                        width: `${Number.parseFloat(prediction.confidence)}%`,
                      }}
                    />
                  </div>
                  <span className="ml-2">{prediction.confidence}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {prediction.actual}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {prediction.status === 'correct' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100">
                      <CheckCircleIcon className="mr-1 h-4 w-4" />
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100">
                      <XCircleIcon className="mr-1 h-4 w-4" />
                      Incorrect
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {prediction.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
