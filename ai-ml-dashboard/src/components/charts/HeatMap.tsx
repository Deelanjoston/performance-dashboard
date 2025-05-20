import React from 'react';

interface HeatMapProps {
  data: number[][];
  labels: string[];
  title: string;
}

export default function HeatMap({ data, labels, title }: HeatMapProps) {
  // Calculate max value for color scaling
  const maxValue = Math.max(...data.flat());

  // Generate color based on value (blue scale)
  const getColor = (value: number) => {
    const normalizedValue = Math.min(1, value / maxValue);
    // Range from light blue to dark blue
    const intensity = Math.floor(255 * (1 - normalizedValue * 0.8)); // Only go to 20% intensity for darkest blue
    return `rgb(${intensity}, ${intensity}, 255)`;
  };

  // Get text color based on background color
  const getTextColor = (value: number) => {
    const normalizedValue = Math.min(1, value / maxValue);
    return normalizedValue > 0.4 ? 'text-white' : 'text-gray-800 dark:text-gray-800';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
                  >
                    Actual \ Predicted
                  </th>
                  {labels.map((label) => (
                    <th
                      key={`header-${label}`}
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {data.map((row, rowIdx) => (
                  <tr key={`row-${labels[rowIdx]}`}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                      {labels[rowIdx]}
                    </td>
                    {row.map((value, colIdx) => (
                      <td
                        key={`cell-${labels[rowIdx]}-${labels[colIdx]}`}
                        className={`whitespace-nowrap px-3 py-4 text-sm ${getTextColor(value)} text-center`}
                        style={{
                          backgroundColor: getColor(value),
                          minWidth: '60px',
                          height: '60px',
                        }}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
