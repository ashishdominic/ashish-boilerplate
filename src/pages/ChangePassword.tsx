import React from 'react'
import Link from 'next/link';
import { useRouter} from 'next/router';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const ChangePassword = () => {

  let router = useRouter();

  let initialValues = {
    currentPassword: '', 
    newPassword: '',     
    confirmNewPassword: ''
  };
  
  let validationSchema=Yup.object({
    currentPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmNewPassword: Yup.string()
      // .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm New Password is required'),
  })
  
  let onSubmit=(values: typeof initialValues)=>{
   console.log('form data',values)
   router.push('/');
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Your Password
          </h2>
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
        <Form className="mt-8 space-y-6" action="#" method="POST">
          
           <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Current Password
              </label>
              <div className="mt-2">
                <Field
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Current Password"
                />
                <ErrorMessage name='currentPassword'/>
              </div>
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
              New Password
              </label>
              <div className="mt-2">
                <Field
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="New Password"
                />
                <ErrorMessage name='newPassword'/>
              </div>
            </div>
            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm New Password
              </label>
              <div className="mt-2">
                <Field
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm New Password"
                />
                <ErrorMessage name='confirmNewPassword'/>
              </div>
            </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
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

export default ChangePassword
