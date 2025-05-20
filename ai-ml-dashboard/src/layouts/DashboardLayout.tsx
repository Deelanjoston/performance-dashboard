import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  CubeIcon,
  CogIcon,
  DocumentChartBarIcon,
  BoltIcon,
  ServerIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import ThemeToggle from '../components/ui/ThemeToggle';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Models', href: '#', icon: CubeIcon, current: false },
  { name: 'Training', href: '#', icon: BoltIcon, current: false },
  { name: 'Datasets', href: '#', icon: DocumentChartBarIcon, current: false },
  { name: 'Analytics', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Infrastructure', href: '#', icon: ServerIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <div className={classNames(
        'fixed inset-0 z-40 flex transition-opacity ease-linear duration-300',
        sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className={classNames(
          'fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300',
          sidebarOpen ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
        />

        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800 pt-5 pb-4">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="ML Dashboard"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">ML Dashboard</span>
          </div>
          <div className="mt-5 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                      'mr-4 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserIcon className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 p-2 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-700 dark:text-gray-200">Data Scientist</p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">user@example.com</p>
              </div>
              <button className="ml-auto flex-shrink-0 rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500">
                <ArrowLeftOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex flex-shrink-0 items-center px-4 py-5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="ML Dashboard"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">ML Dashboard</span>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                      'mr-3 flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserIcon className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 p-2 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Data Scientist</p>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">user@example.com</p>
              </div>
              <button className="ml-auto flex-shrink-0 rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500">
                <ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-800 py-2 px-3 flex items-center justify-between shadow-sm">
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex items-center ml-auto space-x-4">
            <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <BellIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <ThemeToggle />
          </div>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
