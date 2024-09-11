import { Injectable } from '@nestjs/common';
import { income, expenses } from 'src/data';
export interface Transaction {
    id: number;
    description: string;
    amount: number;
}
@Injectable()
export class TransactionsService {
    private income: Transaction[] = income;
    private expenses: Transaction[] = expenses;
    getIncomes():Transaction[] {
        return this.income;
    }
    getExpenses():Transaction[] {
        return this.expenses;
    }
    getIncomeById(id: number): Transaction {
        const numericId = Number(id);
        const transaction = this.income.find(transaction => transaction.id === numericId);
        if (!transaction) {
            throw new Error(`Income with id ${id} not found`);
        }
        return transaction;
    }

    getExpenseById(id: number): Transaction {
        const transaction = this.expenses.find(transaction => transaction.id === numericId);
        const numericId = Number(id);
        if (!transaction) {
            throw new Error(`Expense with id ${id} not found`);
        }
        return transaction;
    }
    addIncome(transaction: Omit<Transaction, 'id'>) {
        const newId = this.income.length > 0 ? Math.max(...this.income.map(
            t => t.id)) + 1 : 1;
        const newTransaction = { ...transaction, id: newId };
        console.log('Adding income:', newTransaction);
        this.income.push(newTransaction);
        console.log('Updated income array:', this.income);
    }
    addExpense(transaction: Omit<Transaction, 'id'>) {
        const newId = this.expenses.length > 0 ? Math.max(...this.expenses.map(
            t => t.id)) + 1 : 1;
        const newTransaction = { ...transaction, id: newId };
        this.expenses.push(newTransaction);
    }
    updateIncome(transaction: Transaction) {
        const index = this.income.findIndex((income) => income.id === transaction.id);
        this.income[index] = transaction;
    }
    updateExpense(transaction: Transaction) {
        const index = this.expenses.findIndex((expense) => expense.id === transaction.id);
        this.expenses[index] = transaction;
    }
    deleteIncome(id: number) {
        const numericId = Number(id);
        this.income = this.income.filter((income) => income.id !== numericId);
    }
    deleteExpense(id: number) {
        const numericId = Number(id);
        this.expenses = this.expenses.filter((expense) => expense.id !== numericId);
    }
}
