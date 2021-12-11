import { Controller,Post,Get,Body,Param,Delete,Put} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
		constructor(private readonly departmentservice:DepartmentService){}

		@Post('adddepartment')
		create(@Body() data: CreateDepartmentDto) {
	    	return this.departmentservice.create(data);
		}

		@Get('view')
		findAll(){
		   return this.departmentservice.findAll();
		}

		@Get('view/:id')
		findOne(@Param('id') id:number){
			return this.departmentservice.findOne(+id);
		}

		@Put('update/:id')
  		update(@Param('id') id: number, @Body() department:CreateDepartmentDto) {
    		return this.departmentservice.update(+id, department);
 		}

		@Delete('delete/:id')
		remove(@Param('id') id:number){
			return this.departmentservice.remove(+id);
		}

	
		
}
