/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, UseFilters } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDto } from './jobs.dto';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';


@Controller('jobs')
@UseFilters(HttpExceptionFilter)
export class JobsController {
    constructor(private readonly jobService: JobsService) { }

    @Get('allJobs')
    //@UseFilters(HttpExceptionFilter) //for error handling of entire file
    async getAllJobs() {
        const jobs = this.jobService.findAllJobs();
        return await jobs.then((result) => {
            if (result) {
                return result
            } else {
                throw new HttpException('Jobs Not Found', HttpStatus.NOT_FOUND)
            }
        }).catch(() => {
            throw new HttpException('Jobs Not Found', HttpStatus.NOT_FOUND)
        });
    }

    @Get('oneJob/:id')
    async getOneJob(@Param('id') id) {
        const oneJob = this.jobService.findJob(id);
        return await oneJob.then((result) => {
            if (result) {
                return result
            }
            else {
                throw new HttpException('Job Not Found', HttpStatus.NOT_FOUND)
            }
        }).catch(() => {
            throw new HttpException('Job Not Found', HttpStatus.NOT_FOUND)
        });
    }

    @Post('newJob')
    async postNewJob(@Body() jobsDto: JobDto) {
        const newJob = this.jobService.postJob(jobsDto);
        return newJob.then((result) => {
            if (result) {
                return result
            }
            else {
                throw new HttpException('Cannot Post Job', HttpStatus.FORBIDDEN)
            }
        }).catch(() => {
            throw new HttpException('Cannot Post Job', HttpStatus.FORBIDDEN)
        });
    }

    @Put('updateJob/:id')
    async updateJob(@Param('id') id, @Body() jobsDto: JobDto) {
        return this.jobService.updateJob(id, jobsDto).then((result) => {
            if (result) {
                return result
            }
            else {
                throw new HttpException('Cannot Update Job', HttpStatus.I_AM_A_TEAPOT)
            }
        }).catch(() => {
            throw new HttpException('Cannot Update Job', HttpStatus.I_AM_A_TEAPOT)
        });
    }

    @Delete('deleteJob/:id')
    async deleteJob(@Param('id') id) {
        return this.jobService.deleteJob(id);
    }

}
