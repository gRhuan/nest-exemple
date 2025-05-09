import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MembersRepository } from './database/repositories/members.repository';
import { PrismaMembersRepository } from './database/repositories/prisma/prisma-members.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MembersRepository,
      useClass: PrismaMembersRepository,
    },
  ],
})
export class AppModule {}
