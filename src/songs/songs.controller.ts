import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private readonly songsService: SongsService) {}

    @Post()
    create() {
        return this.songsService.create('song2');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
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
