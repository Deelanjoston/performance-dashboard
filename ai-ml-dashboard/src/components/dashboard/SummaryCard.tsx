import {
  ArrowUpIcon,
  ArrowDownIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export default function SummaryCard({ title, value, change, isPositive, icon }: SummaryCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'accuracy':
        return <CheckCircleIcon className="h-6 w-6" />;
      case 'f1Score':
        return <DocumentTextIcon className="h-6 w-6" />;
      case 'time':
        return <ClockIcon className="h-6 w-6" />;
      case 'cost':
        return <CurrencyDollarIcon className="h-6 w-6" />;
      default:
        return <DocumentTextIcon className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`
              ${isPositive
                ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                : icon === 'cost' && !isPositive
                  ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
              } p-3 rounded-md`}
            >
              {getIcon(icon)}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  {value}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
        <div className="text-sm">
          <div className="font-medium text-gray-500 dark:text-gray-400 flex items-center">
            {isPositive ? (
              <ArrowUpIcon
                className={`${
                  icon === 'cost' && change.startsWith('+')
                    ? 'text-red-500 dark:text-red-400'
                    : 'text-green-500 dark:text-green-400'
                } h-4 w-4 mr-1`}
              />
            ) : (
              <ArrowDownIcon
                className={`${
                  icon === 'cost' && change.startsWith('-')
                    ? 'text-green-500 dark:text-green-400'
                    : 'text-red-500 dark:text-red-400'
                } h-4 w-4 mr-1`}
              />
            )}
            <span
              className={`${
                isPositive
                  ? icon === 'cost' && change.startsWith('+')
                    ? 'text-red-500 dark:text-red-400'
                    : 'text-green-500 dark:text-green-400'
                  : icon === 'cost' && change.startsWith('-')
                    ? 'text-green-500 dark:text-green-400'
                    : 'text-red-500 dark:text-red-400'
              }`}
            >
              {change} from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
