//gqlquery.ts

import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login(
      $email: String!
      $password: String!    
     ){
    login(
    email: $email
    password: $password     
    ){
        access_token
        user_id
        user_type
        platform_user_type
        logged_in_through
    }
}
`;

// export const LOGIN_USER = gql`

//   query userLogin($payload:LoginUserDto!) {

//     userLogin(payload: $payload) {

//       accessToken

//       refreshToken

//     }

//   }
// `;

