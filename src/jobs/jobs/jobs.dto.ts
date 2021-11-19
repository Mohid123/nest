/* eslint-disable prettier/prettier */
import { IsString, IsInt } from "class-validator";

export class JobDto {
    @IsString()
    title: string;

    @IsInt()
    salary: number;

    @IsString()
    description: string;

    @IsString()
    shift: string;

    @IsString()
    role: string;
}