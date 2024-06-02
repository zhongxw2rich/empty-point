import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { add,find } from "@/serverConponents/EmptyPointUser";

const authOptions: NextAuthOptions = {
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
      if (typeof user.email === 'string') {
        const existUser = await find(user.email);
        if (!existUser) {
          await add({
            name: user.name ? user.name : '',
            email: user.email
          });
        }
        return true;
      }
      return '/unauthorized';
    }
  }
};

const nextAuth = NextAuth(authOptions);

export {nextAuth as GET, nextAuth as POST};



