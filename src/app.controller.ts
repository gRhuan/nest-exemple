import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async create() {
    await this.prisma.members.create({
      data: {
        id: randomUUID(),
        name: 'teste',
        function: 'testa',
      },
    });
  }
}
