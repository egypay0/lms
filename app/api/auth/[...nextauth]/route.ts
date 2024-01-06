import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {compare} from 'bcrypt'
import { sql } from "@vercel/postgres";

const handler = NextAuth({

  pages:{ 
    signIn: '/login',
  },
  session: {
    strategy:'jwt',

  },

    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { },
            password: {  }
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            const response = await sql `
            SELECT * from users where email =${credentials.email} 
            `;
            const user = response.rows[0];
            const passwordComare = await compare(credentials?.password || "", user.password)

            if (passwordComare){

            console.log({passwordComare})
            return {
              id: user.id,
              email : user.email
            }
          }
            console.log({credentials});
            return null;
          },
        }),
      ],
       

});

export {handler as GET , handler as POST}