// Validation functions for registration module

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password: string): { isValid: boolean; message: string } => {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' };
  }

  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }

  if (!/(?=.*[0-9])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }

  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character (!@#$%^&*)' };
  }

  return { isValid: true, message: '' };
};

// Validate phone number format
export const validatePhone = (phone: string): boolean => {
  // Simple phone validation - adjust as needed for your requirements
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Validate date of birth (not in the future and user is at least 13 years old)
export const validateDateOfBirth = (dob: string): { isValid: boolean; message: string } => {
  const today = new Date();
  const birthDate = new Date(dob);
  
  if (birthDate > today) {
    return { isValid: false, message: 'Date of birth cannot be in the future' };
  }

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Adjust age if birthday hasn't occurred this year yet
  const adjustedAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) 
    ? age - 1 
    : age;

  if (adjustedAge < 13) {
    return { isValid: false, message: 'You must be at least 13 years old to register' };
  }

  if (adjustedAge > 120) {
    return { isValid: false, message: 'Please enter a valid date of birth' };
  }

  return { isValid: true, message: '' };
};

// Validate required fields
export const validateRequiredFields = (fields: Record<string, any>): { isValid: boolean; missingFields: string[] } => {
  const missingFields: string[] = [];
  
  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      missingFields.push(key);
    }
  });

  return {
    isValid: missingFields.length === 0,
    missingFields
  };
};

// Validate the entire registration form
export const validateRegistrationForm = (formData: any) => {
  const errors: Record<string, string> = {};

  // Validate email
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate password
  if (!formData.password) {
    errors.password = 'Password is required';
  } else {
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.message;
    }
  }

  // Validate password confirmation
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Validate first name
  if (!formData.firstName) {
    errors.firstName = 'First name is required';
  }

  // Validate last name
  if (!formData.lastName) {
    errors.lastName = 'Last name is required';
  }

  // Validate date of birth
  if (!formData.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  } else {
    const dobValidation = validateDateOfBirth(formData.dateOfBirth);
    if (!dobValidation.isValid) {
      errors.dateOfBirth = dobValidation.message;
    }
  }

  // Validate phone
  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Validate address
  if (!formData.address) {
    errors.address = 'Address is required';
  }

  // Validate city
  if (!formData.city) {
    errors.city = 'City is required';
  }

  // Validate country
  if (!formData.country) {
    errors.country = 'Country is required';
  }

  // Validate terms acceptance
  if (!formData.acceptTerms) {
    errors.acceptTerms = 'You must agree to the terms and conditions';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
