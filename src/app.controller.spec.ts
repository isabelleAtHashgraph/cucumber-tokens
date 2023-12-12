import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "All information!"', () => {
      expect(appController.getInformation()).toBe('All information!');
    });
    it('should return "Created!"', () => {
      expect(appController.create()).toBe('Created!');
    });
  });
});
