declare const register: (data: any) => Promise<import(".prisma/client").User>;
declare const login: (email: string, password: string) => Promise<import(".prisma/client").User>;
declare const findById: (id: string) => Promise<import(".prisma/client").User | null>;
export { register, login, findById };
