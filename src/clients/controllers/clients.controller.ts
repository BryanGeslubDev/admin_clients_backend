import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientsService } from '../services/clients.service';

@Controller('api/clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  getAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.clientsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number) {
    return this.clientsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientsService.delete(id);
  }
}
