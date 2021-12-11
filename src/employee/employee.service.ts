import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
	
	constructor(private readonly prisma:PrismaService){}

	createemployee(employee: CreateEmployeeDto) {
    	return this.prisma.employee.create({data: employee});
  	}

	findAll(){
		return this.prisma.employee.findMany();
	}

	findOne(id:number){
		return this.prisma.employee.findUnique({
			where:{
				id
			}
		})
	}

	update(id: number, employee:CreateEmployeeDto ) {
    	return this.prisma.employee.update({
      		where: {
       		 id
      		},
      		data: employee,
   		});
  	}

	remove(id:number){
		return this.prisma.employee.delete({
			where:{id}
		})
	}
}


