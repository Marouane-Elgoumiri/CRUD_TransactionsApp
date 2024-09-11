import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('report/:type')
export class AppController{

  @Get()
  getAllIncomeREport(){
    return [];
  }
  @Get(':id')
  getAllIncomeReportById(){
    return "get certain type";
  }
  @Post()
  createIncomeReport(){
    return "created!";
  }
  @Put(':id')
  updateIncomeReport(){
    return "Updated!";
  }
  @Delete(':id')
  deleteIncomeReport(){
    return "deleted!";
  }
}
