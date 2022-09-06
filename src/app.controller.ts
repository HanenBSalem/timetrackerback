import { Body, Controller, Get, Post } from '@nestjs/common';
//import { AppController } from './app.controller';
import { AppService } from './app.service';


/*describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  /**
   * get periods 
   * @returns
   */

  @Get()
  async periods(){

  return await this.appService.findAllTime();
  }

  /**
   * create period
   * @param body 
   * @returns 
   */
  
  @Post()
  async createPeriod(@Body() body){
    return await this.appService.createData(body);
  }
}

