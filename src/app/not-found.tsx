import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 p-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}