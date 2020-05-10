import { Controller, Get, Req, Res, Query, Post, Put, HttpCode, Header } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('tickets')
export class TicketsController {
    @Post()
    @HttpCode(204)
    @Header('Authorization', 'Bearer 1234')
    create(): string {
        return "Post"
    }

    @Put()
    update(): string {
        return "Update"
    }


    @Get()
    findAll(
        @Req()
        request: Request,
        @Res()
        response: Response,
        @Query() query
    ): any {
        console.log('query', query)
        return response.json({msg: "Holy moly"})
    }

    @Get(':id')
    findOne(): string {
        return 'One'
    }
}
