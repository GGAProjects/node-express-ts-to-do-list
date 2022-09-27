declare const encrypt: (text: string) => {
    iv: string;
    content: string;
};
declare const decrypt: (hash: any) => string;
export { encrypt, decrypt };
