import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/lib/validation';

interface StepThreeProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function StepThree({ register, errors }: StepThreeProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Details</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="stream" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Stream *
          </label>
          <input
            id="stream"
            {...register('stream')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.stream ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Computer Science"
          />
          {errors.stream && (
            <p className="mt-1 text-sm text-red-600">{errors.stream.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Institution *
          </label>
          <input
            id="institution"
            {...register('institution')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.institution ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Name of university/college"
          />
          {errors.institution && (
            <p className="mt-1 text-sm text-red-600">{errors.institution.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}