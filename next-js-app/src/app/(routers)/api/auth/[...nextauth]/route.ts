import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
 
export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
          httpOptions: {
            timeout: 120000,
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
      signIn: async ({ user }) => {
        if (user.email === 'zhongxw2024@gmail.com') {
          return true;
        }
        return '/unauthorized';
      }
    }
};

export const nextAuth = NextAuth(authOptions);

export {nextAuth as GET, nextAuth as POST};



