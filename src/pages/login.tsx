
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter} from 'next/router';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../components/CustomTextField';
import CustomSubmitButton from '../components/CustomSubmitButton'
import DarkModeToggle from '../components/DarkModeToggle';
import CustomPopup from '../components/CustomPopup';
import client from '@/utils/apollo-client';
import { ApolloError, gql, useMutation, useQuery } from '@apollo/client';
//import { LOGIN_USER } from '@/utils/gqlquery';




let login: React.FC = () => {
  const LOGIN_USER = gql`

  query userLogin($payload:LoginUserDto!) {

    userLogin(payload: $payload) {

      accessToken

      refreshToken

    }

  }
`;

let router = useRouter();

  let initialValues = {
    email: '',
    password: '',
  };
  // const { loading, error} = useQuery(LOGIN_USER, { client });
  // const onSubmit = async (values: { email: string; password: string }) => {
  //   console.log('Button clicked');
  //   console.log('Form Values:', values);

  //   if (loading) {
  //     // Handle loading state
  //   } else if (error) {
  //     console.error('Authentication failed:', error.message);
  //   } else {
  //     try {
  //       //const { data: loginData } = userLogin({
  //         variables: {
  //           input: {
  //             email: values.email,
  //             password: values.password,
  //           },
  //         },
  //      // });

  //       const { accessToken, refreshToken } = loginData.userLogin;

  //       localStorage.setItem('accessToken', accessToken);
  //       localStorage.setItem('refreshToken', refreshToken);

  //       router.push('/');

  //       console.log('Login success');
  //     } 
  //     catch (error) {
  //       const apolloError = error as ApolloError;
  //       console.error('Login failed:', apolloError.message);
  //     }
  //   }
  // };

  const [userLogin] = useQuery(LOGIN_USER);  
   const onSubmit = async (values: { email: string; password: string }) => { 
        try {       
          const { data } = await userLogin({         
          variables: { 
           payload: {   
           email: values.email,  
           password: values.password,  
          },  
        },
      }); 
           const { accessToken, refreshToken } = data.userLogin;       
           localStorage.setItem('accessToken', accessToken);      
           localStorage.setItem('refreshToken', refreshToken);       
           router.push('/');     
          } catch (error) {       
          console.error('Authentication error:', error);    
         }   
        };

  
  let validationSchema=Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').test('is-strong-password', 'Password must be strong', (value) => {

      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      return strongPasswordRegex.test(value || '')
    }),
  })
  
  // let onSubmit=(values: { email: string; password: string})=>{
  //  console.log('form data',values)
  //  router.push('/');
  // }

  const [isPopupOpen, setPopupOpen] = useState(false);


    // Function to open the popup
    const openPopup = () => {
      setPopupOpen(true);
    };
  
    // Function to close the popup
    const closePopup = () => {
      setPopupOpen(false);
    };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
          <Form className="rounded p-6 shadow-md space-y-6" action="#" method="POST">
            
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
                  // type="password"
                  variant="outlined" 
                  fullWidth
                  as={CustomTextField}
                />
              
            
              <div className="flex items-center justify-end">
                <div className="text-sm">
                 <Link href="/ForgotPassword"  className="font-semibold text-indigo-600 hover:text-indigo-500" >
                    Forgot password?
                 </Link>
                 
                </div>
              </div>
              
            <div>
             
              <CustomSubmitButton 
                type="submit" 
                label="Sign in"
                variant="contained"             
              />
              
            </div>
            
          </Form>
          </Formik>
          <div className="flex items-center justify-between">
          <div className="text-sm">
          <Link href="/ChangePassword"
               className="font-semibold text-indigo-600 hover:text-indigo-500">
                ChangePassword
             
          </Link>
          </div>
          <div className="text-sm">
          <Link href="/Register"
               className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register
             
          </Link>
          
          </div>
          </div>
          <div>
          <DarkModeToggle />
          </div>

           {/* Button to open the popup */}
      <button onClick={openPopup}>Open Popup</button>

{/* Render the CustomPopup component */}
<CustomPopup
  open={isPopupOpen}
  onClose={closePopup}
  title="Do you want to delete"
  onPrimaryButtonClick={() => {
    // Handle primary button click
    closePopup(); // Close the popup if needed
  }}
  onSecondaryButtonClick={() => {
    // Handle secondary button click
    closePopup(); // Close the popup if needed
  }}
/>
          
        </div>
      </div>
    </div>
  )
}

export default login

