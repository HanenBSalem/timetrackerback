import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  /**
   * get all periods
   * @returns
   */
 
  async findAllTime(){
      return await this.prisma.time.findMany();
  }
  /**
   * create period 
   * @param data
   */
  async createData (data: any){
    data
  }
}