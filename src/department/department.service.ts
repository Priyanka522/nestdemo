import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {	
	constructor(private readonly prisma:PrismaService){}

	create(department: CreateDepartmentDto) {
    	return this.prisma.department.create({data: department});
  	}

	findAll(){
		return this.prisma.department.findMany();
	}

	findOne(id:number){
		return this.prisma.department.findUnique({
			where:{
				id
			}
		})
	}

	update(id: number, department:CreateDepartmentDto ) {
    	return this.prisma.department.update({
      		where: {
       		 id
      		},
      		data: department,
   		});
  	}

	remove(id:number){
		return this.prisma.department.delete({
			where:{id}
		})
	}


}
