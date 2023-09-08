import React from 'react'
import Link from 'next/link';
import { useRouter} from 'next/router';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../components/CustomTextField';


const ForgotPassword = () => {
  let router = useRouter();

  let initialValues = {
    email: '',
  };
  
  let validationSchema=Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
   
  })
  
  let onSubmit=(values: { email: string})=>{
   console.log('form data',values)
   router.push('/');
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address, and we'll send you a link to reset your password.
          </p>
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
        <Form className="mt-8 space-y-6" action="#" method="POST">
         
           <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Field
                   name="email"
                   label="Email"
                   variant="outlined" 
                   fullWidth
                   as={CustomTextField}  
                />
                
              </div>
            </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </Form>
        </Formik>
        <div className="text-sm text-center">
          <p className="text-gray-600">
            Remember your password?{' '}
            <Link href="/login"
               className="font-medium text-indigo-600 hover:text-indigo-500">
                Log in
             
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword
