interface Row {
    id: number;
    name: string;
    age: string;
    sex: string;
    referred: string;
    test: string;
    amount: string;
}

export const createNewRow = (): Row => ({
    id: Date.now(),
    name: "",
    age: "",
    sex: "",
    referred: "",
    test: "",
    amount: "",
});