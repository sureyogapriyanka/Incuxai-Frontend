export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  acceptTerms: boolean;
  newsletter?: boolean;
}

export interface StepOneProps {
  formData: FormData;
  handleChange: (input: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

export interface StepTwoProps {
  formData: FormData;
  handleChange: (input: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export interface StepThreeProps {
  formData: FormData;
  handleChange: (input: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  prevStep: () => void;
}