import { Body, Controller, Post } from '@nestjs/common';
import { MembersRepository } from './database/repositories/members.repository';
import { CreateMemberBody } from './dto/createMember.dto';

@Controller()
export class AppController {
  constructor(private readonly membersRepository: MembersRepository) {}

  @Post()
  async create(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);
  }
}
