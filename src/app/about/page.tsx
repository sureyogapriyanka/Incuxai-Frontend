import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About This Project</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              This is a frontend-only Next.js 14 project built with modern technologies:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700 dark:text-gray-300">Next.js 14 with App Router</li>
              <li className="text-gray-700 dark:text-gray-300">TypeScript for type safety</li>
              <li className="text-gray-700 dark:text-gray-300">Tailwind CSS for styling</li>
              <li className="text-gray-700 dark:text-gray-300">ESLint for code quality</li>
            </ul>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Features</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This starter template includes everything you need to build a modern frontend application:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                <li>File-based routing system</li>
                <li>Server and Client Components</li>
                <li>Automatic bundling and code splitting</li>
                <li>Optimized performance</li>
                <li>Dark mode support</li>
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Go Home
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}