import { Controller, Post, Body } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './database/prisma.service';
import { CreateMemberBody } from './dto/createMember.dto';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateMemberBody) {
    const { name, function: menberFunction } = body;
    const member = await this.prisma.members.create({
      data: {
        id: randomUUID(),
        name,
        function: menberFunction,
      },
    });

    return {
      member,
    };
  }
}
