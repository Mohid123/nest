/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './jobs.interface';
import { JobDto } from './jobs.dto';

@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) { }

    async findAllJobs() {
        const allJobs = await this.jobModel.find().exec();
        return allJobs as Job[]
    }

    async findJob(id: string) {
        return await this.jobModel.findOne({ _id: id })
    }

    async postJob(jobdto: JobDto) {
        const newJob = await new this.jobModel(jobdto);
        return newJob.save();
    }

    async updateJob(id, jobdto: JobDto) {
        const JobTitle = this.jobModel.findOne({ _id: id });
        if (JobTitle) {
            const updatedJob = await this.jobModel.updateOne({ ...jobdto });
            return updatedJob;
        }
        else if (!JobTitle) {
            throw new HttpException('ID Not Found', HttpStatus.NOT_FOUND);
        }
    }

    async deleteJob(id) {
        return await this.jobModel.findByIdAndRemove({ _id: id });
    }
}
