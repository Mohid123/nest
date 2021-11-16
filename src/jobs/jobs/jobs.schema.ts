/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema({
    title: String,
    salary: Number,
    description: String,
    shift: String,
    role: String
})