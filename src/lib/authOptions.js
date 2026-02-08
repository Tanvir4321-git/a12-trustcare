import { loginuser } from "@/Action/Server/login"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions={

    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        
        credentials: {
        //   username: { label: "Username", type: "text", placeholder: "jsmith" },
        //   password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const user= await loginuser({
                email:credentials?.email,
                password:credentials?.password
            })
       
        
            if (!user) {
          throw new Error("Invalid email or password")
        }
          return user
        }
        
      })
    ]
}
