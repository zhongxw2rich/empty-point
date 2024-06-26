import { EmptyPointUser, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function add(createData: {name:any, email: string}): Promise<boolean> {
    const user = await prisma.emptyPointUser.create({
        data: {
            name: createData.name,
            email: createData.email
        }
    });
    return !!user;
}

export async function del(deleteEmail: string): Promise<boolean> {
    const user = await prisma.emptyPointUser.delete({
        where: {
            email: deleteEmail
        }
    });
    return !!user;
}

export async function raise(updateEmail: string): Promise<boolean> {
    const user = await prisma.emptyPointUser.update({
        where: {
            email: updateEmail
        },
        data: {
            role: 'ADMIN'
        } 
    });
    return !!user;
}

export async function find(queryEmail: string): Promise<{name: any, email: any, role: any, createdAt: Date, updatedAt: Date} | null> {
    return await prisma.emptyPointUser.findUnique({
        where: {
            email: queryEmail,
        },
        select: {
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        }
    });
}


export async function list(): Promise<EmptyPointUser[]> {
    return await prisma.emptyPointUser.findMany();
}


