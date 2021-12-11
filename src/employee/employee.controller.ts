import { Controller,Post,Get,Body,Param,Delete,Put  } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee.dto';


@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeservice:EmployeeService){}

	@Post('addemployee')
	create(@Body() employee: CreateEmployeeDto) {
	    return this.employeeservice.createemployee(employee);
	}

	@Get('view')
	findAll(){
	   return this.employeeservice.findAll();
	}

	@Get('view/:id')
	findOne(@Param('id') id:number){
		return this.employeeservice.findOne(+id);
	}

	@Put('update/:id')
  	update(@Param('id') id: number, @Body() employee:CreateEmployeeDto) {
    	return this.employeeservice.update(+id, employee);
 	}


	@Delete('delete/:id')
	remove(@Param('id') id:number){
		return this.employeeservice.remove(+id);
	}
}



