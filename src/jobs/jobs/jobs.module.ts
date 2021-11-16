/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JobSchema } from './jobs.schema';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }])],
    controllers: [JobsController],
    providers: [JobsService],
})
export class JobsModule { }
