'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter} from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '@/components/CustomTextField';
import { useDispatch } from 'react-redux';
import { setUserType } from '@/redux/features/users/userSlice';
import { useMutation} from '@apollo/client';
import { LOGIN } from '@/utils/gqlquery';

const LoginPage = () => {

  const dispatch = useDispatch();
  let router = useRouter();
  let initialValues = {
    email: '',
    password: '',
  };

  const [loginMutation] = useMutation(LOGIN);
  
  let validationSchema=Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').test('is-strong-password', 'Password must be strong', (value) => {
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return strongPasswordRegex.test(value || '')
    }),
  })
  
  // let onSubmit=(values: { email: string})=>{
  //  console.log('form data',values)
  //  const userType = 'admin';
  //  dispatch(setUserType(userType));
  //  router.push('/CenterUser');
  // }

  const onSubmit = async (values: { email: string; password: string; }) => {
    try {
      const { data } = await loginMutation({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      const userType = 'admin'; // Replace this with the actual user type from the response
      dispatch(setUserType(userType));
      router.push('/CenterUser');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2> */}
          
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
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
                </label>

                 <Field
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined" 
                  fullWidth
                  as={CustomTextField}
                />
                
              </div>
            </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondarygreen hover:bg-lightgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </Form>
        </Formik>
        <div className="text-sm text-center">
          <p className="text-gray-600">
          
            <Link href="/ChangePassword"
               className="font-medium text-indigo-600 hover:text-indigo-500">
                Change Password
             
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage;

