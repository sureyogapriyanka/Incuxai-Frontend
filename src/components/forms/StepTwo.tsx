import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/lib/validation';

interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function StepTwo({ register, errors }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education Details</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="highestQual" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Qualification *
          </label>
          <select
            id="highestQual"
            {...register('highestQual')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.highestQual ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select your qualification</option>
            <option value="highSchool">High School Diploma</option>
            <option value="associate">Associate's Degree</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
            <option value="other">Other</option>
          </select>
          {errors.highestQual && (
            <p className="mt-1 text-sm text-red-600">{errors.highestQual.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="gradYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Graduation Year *
          </label>
          <input
            id="gradYear"
            type="number"
            {...register('gradYear', { valueAsNumber: true })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.gradYear ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., 2020"
          />
          {errors.gradYear && (
            <p className="mt-1 text-sm text-red-600">{errors.gradYear.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}