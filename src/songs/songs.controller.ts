import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Post()
    create() {
        return 'This action adds a new song endpoint';
    }

    @Get()
    findAll() {
        return 'This action returns all songs enpoint';
    }

    @Get(':id')
    findOne() {
        return `fetch song endpoint`;
    }

    @Put(':id')
    update() {
        return `update song endpoint`;
    }

    @Delete(':id')
    delete() {
        return `delete song endpoint`;
    }
}
