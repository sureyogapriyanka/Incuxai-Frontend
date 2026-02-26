export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome to Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your profile has been successfully completed. You can now access all features of our platform.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-700 dark:text-green-300">
              <span className="font-semibold">Success:</span> Registration completed! You are now fully authenticated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}