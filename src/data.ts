interface Transaction {
    id: number;
    description: string;
    amount: number;
}

const income: Transaction[] = [
    { id: 1, description: "Salary", amount: 5000 },
    { id: 2, description: "Freelance Work", amount: 1000 },
    { id: 3, description: "Investment", amount: 2000 },
];

const expenses: Transaction[] = [
    { id: 1, description: "Rent", amount: -1000 },
    { id: 2, description: "Groceries", amount: -200 },
    { id: 3, description: "Utilities", amount: -300 },
];

export { income, expenses };