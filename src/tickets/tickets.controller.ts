import { Controller, Get, Req, Res, Query, Post, Put, HttpCode, Header, Param, Body, Delete, UseFilters, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { TicketsService } from './tickets.service';
import { CreateTicketDTO } from './dto/create-ticket.dto';
import { Ticket } from './interfaces/ticket.interface';
import { HttpExceptionFilter } from 'src/common/filters/http.exception.filter';

@Controller('tickets')
@UseFilters(HttpExceptionFilter)
export class TicketsController {
    constructor(
        private ticketService: TicketsService
    ){}

    @Post()
    async create(@Body() ticket: CreateTicketDTO): Promise<Ticket[]> {
        console.log('toto', ticket);
        return this.ticketService.create(ticket);
    }

    @Put()
    update(): string {
        return "Update"
    }


    @Get()
    async findAll(
        @Param()
        params
    ): Promise<Ticket[]> {
        return this.ticketService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param()
        params
    ): Promise<Ticket> {
        return this.ticketService.findOne(params.id);
    }

    @Delete(':id')
    async delete(
        @Param()
        params
    ): Promise<Ticket[]> {
        // throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
        // throw new ForbiddenException();
        throw new NotFoundException();
        // return this.ticketService.delete(params.id);
    }
}
