export declare const create: (data: any) => Promise<import(".prisma/client").Task>;
export declare const read: (id: string) => Promise<import(".prisma/client").Task | null>;
export declare const update: (data: any) => Promise<import(".prisma/client").Task>;
export declare const updateModel: (data: any) => Promise<import(".prisma/client").Task>;
export declare const list: (authorId: string, filters?: {}) => Promise<(import(".prisma/client").Task & {
    status: import(".prisma/client").TaskStatus;
})[]>;
export declare const destroy: (id: string) => Promise<import(".prisma/client").Task>;
