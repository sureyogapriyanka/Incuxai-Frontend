# Strict Registration Form — Frontend Module

## Author
**Name:** [Your Name]  
**Task ID:** Frontend Registration Module  
**Module:** Strict Registration Form Frontend Implementation

## Description
This module implements the **strict registration form frontend** for a multi-team project. The frontend module is responsible for collecting user profile data through a multi-step form and securely submitting it to the backend for processing.

## Objective
This module handles the strict registration frontend only. It does NOT implement login, OTP, or backend token generation, which are managed by other teams.

## Features Implemented
- **Multi-step form:** Collects user profile data across multiple steps for better UX
- **Frontend validation:** Client-side validation using Zod schema for immediate feedback
- **Secure API submission:** Submits data to backend endpoint `/auth/register` with proper authentication
- **Token usage from localStorage:** Consumes Reg-JWT token stored by the login module
- **Responsive UI:** Built with Tailwind CSS for cross-device compatibility
- **State management:** Proper step navigation and form state handling

## Folder Structure
```
my-frontend/
├── app/
│   ├── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/
│   └── forms/
│       ├── MultiStepForm.tsx
│       ├── StepOne.tsx
│       ├── StepTwo.tsx
│       └── StepThree.tsx
├── lib/
│   ├── api.ts
│   └── validation.ts
├── public/
├── package.json
├── README.md
├── .gitignore
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Registration Flow Explanation

### Step-by-Step Frontend Behavior:
1. **User lands on /register page** - Multi-step form is displayed
2. **Step 1:** Collects personal information (First Name, Last Name)
3. **Step 2:** Collects education details (Qualification, Graduation Year)
4. **Step 3:** Collects course details (Stream, Institution)
5. **Validation occurs** at each step before proceeding
6. **On final submission:**
   - Retrieves `regToken` from localStorage
   - Makes POST request to `/auth/register` with Authorization header
   - Includes full form data in request body
   - Handles success/error responses appropriately
7. **On success:**
   - Stores received `authToken` in localStorage
   - Removes the `regToken` from localStorage
   - Redirects user to `/dashboard`

### How Token is Used:
- The `regToken` (Registration JWT) must be pre-stored in localStorage by the login module
- This frontend module consumes the token by retrieving it from localStorage
- The token is sent in the Authorization header: `Authorization: Bearer {regToken}`
- After successful registration, the system receives an `authToken` which is stored in localStorage

### How Data is Submitted:
- Full profile data is collected across the three steps
- On final submission, all data is sent in a single POST request to `/auth/register`
- This ensures atomic profile submission as required by the BRD

## Integration Requirements

### Required for Operation:
- `regToken` must exist in localStorage (provided by login module)
- Backend must provide the `regToken` to the login module
- Backend must return `authToken` upon successful registration

### What is NOT Implemented:
- **Login functionality** - handled by other team
- **OTP verification** - handled by other team
- **Backend services** - handled by other team
- **Token generation** - handled by other team

## Run Instructions

### Prerequisites:
- Node.js v16 or higher
- npm or yarn package manager

### Setup:
1. Clone the repository:
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:3000/register
```

## Environment Variables
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Integration Notes for Other Teams

### For Login Module Team:
- Ensure `regToken` is stored in localStorage with key `"regToken"`
- The token will be consumed and removed after successful registration

### For Backend Team:
- Expect POST request to `/auth/register` endpoint
- Request will include Authorization header with Reg-JWT
- Request body will contain all profile data collected in the form
- Please return `token` field in response with the Auth JWT

### For Dashboard Team:
- After successful registration, user will be redirected to `/dashboard`
- Auth JWT will be available in localStorage under `"authToken"` key

## Technology Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod (Validation)
- Axios (API calls)

## Code Documentation
The registration submission logic includes comments indicating:
- `regToken` is required from the login module
- This module only consumes the token (does not generate it)
- The module handles secure transmission and cleanup of tokens

---
**Project Status:** Complete  
**Module Type:** Frontend Only  
**Team Responsibility:** Registration Form Implementation