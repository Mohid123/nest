/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs/jobs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohid_solis:ogpEUL3eOoc2yQug@cluster0.dwdqw.mongodb.net/nest_apis?retryWrites=true&w=majority',
    ),
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
