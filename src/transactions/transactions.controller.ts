import { Controller, Get, Param, Post, Put,Delete, NotFoundException, Body } from '@nestjs/common';
import { Transaction, TransactionsService } from './transactions.service';
import { get } from 'http';
import { expenses } from 'src/data';
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Get('incomes')
    getIncomes(): Transaction[] {
        return this.transactionsService.getIncomes();
    }
    @Get('expenses')
    getExpenses(): Transaction[] {
        return this.transactionsService.getExpenses();
    }
    @Get('income/:id')
    getIncomeById(@Param('id')id:number):Transaction{
        try {
            return this.transactionsService.getIncomeById(id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
    @Get('expense/:id')
    getExpensesById(@Param('id') id: number):Transaction{
        try {
            return this.transactionsService.getExpenseById(id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
    @Post('income')
    addIncome(@Body() transaction: Omit<Transaction, 'id'>): { message: string } {
        this.transactionsService.addIncome(transaction);
        return { message: 'Income added successfully' };
    }
    @Post('expense')
    addExpense(@Body() transaction: Omit<Transaction, 'id'>):{message: string}{
        this.transactionsService.addExpense(transaction);
        return { message: 'Expense added successfully' };
    }
    @Put('incomes/:id')
    updateIncome(@Body() transaction: Transaction):{message: string}{
        this.transactionsService.updateIncome(transaction);
        return { message: 'Income updated successfully' };
    }
    @Put('expenses/:id')
    updateExpense(@Body() transaction: Transaction):{message: string}{
        this.transactionsService.updateExpense(transaction);
        return { message: 'Expense updated successfully' };
    }
    @Delete('income/:id')
    deleteIncome(@Param('id') id:number):{message: string}{
        this.transactionsService.deleteIncome(id);
        return { message: 'Income Deleted successfully' };
    }
    @Delete('expense/:id')
    deleteExpense(@Param('id') id:number):{message: string}{
        this.transactionsService.deleteExpense(id);
        return {message:'Income Deleted successfully' }
    }
}
