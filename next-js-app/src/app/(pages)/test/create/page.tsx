import { create,list,find } from "@/serverConponents/EmptyPointUser";


export default async function TestCreate({ searchParams }: any) {
    const { email } = searchParams;
    console.log(await find(email));
}

