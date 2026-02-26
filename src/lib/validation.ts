import { z } from 'zod';

// Define the schema for the form data
const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  highestQual: z.string().min(1, 'Highest qualification is required'),
  gradYear: z.number().int('Graduation year must be an integer').gte(1900, 'Graduation year must be a valid year').lte(new Date().getFullYear() + 10, 'Graduation year cannot be in the distant future'),
  stream: z.string().min(1, 'Stream is required'),
  institution: z.string().min(1, 'Institution is required'),
});

// Export the schema
export { FormDataSchema };

// Export the inferred type
export type FormData = z.infer<typeof FormDataSchema>;

// Helper function to validate form data
export const validateFormData = (data: unknown) => {
  return FormDataSchema.safeParse(data);
};
