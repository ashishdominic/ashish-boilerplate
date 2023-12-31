import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../components/CustomTextField';


const Register = () => {
let router = useRouter();

let initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

let validationSchema=Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm password is required'),
})

let onSubmit=(values: { name: string; email: string; password: string; confirmPassword: string})=>{
 console.log('form data',values)
 router.push('/');
}

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
        <Form className="mt-8 space-y-6" action="#" method="POST">
                <Field
                  name="name"
                  label="Name"
                  variant="outlined" 
                  fullWidth
                  as={CustomTextField}
                />

                <Field
                 name="email"
                 label="Email"
                 variant="outlined" 
                 fullWidth
                 as={CustomTextField}
                />
           
           
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined" 
                  fullWidth
                  as={CustomTextField}
                />

          
                <Field
                   name="confirmPassword"
                   label="Confirm Password"
                   type="password"
                   variant="outlined" 
                   fullWidth
                   as={CustomTextField}
                />

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </Form>
        </Formik>
        <div className="text-sm text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
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

export default Register
