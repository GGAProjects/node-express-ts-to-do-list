export declare const getList: () => Promise<import(".prisma/client").TaskStatus[]>;
export declare const findByStatus: (status: string) => Promise<import(".prisma/client").TaskStatus | null>;
