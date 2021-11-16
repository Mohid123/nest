/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './jobs.interface';
import { JobDto } from './jobs.dto';

@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) { }

    async findAll() {
        return await this.jobModel.find()
    }

    async findJob(id: string) {
        return await this.jobModel.findOne({ _id: id })
    }

    async updateJob(jobdto: JobDto) {
        const jobDoc = this.jobModel.findOne({ title: jobdto.title });
        if (jobDoc) {
        }
    }
}
