import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllInformation(): string {
    return 'All information!';
  }
  createMessage(): string {
    return 'Created!';
  }
}
