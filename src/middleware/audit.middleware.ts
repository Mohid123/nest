/* eslint-disable prettier/prettier */
/* tslint: disable */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request } from "express-serve-static-core";
import { Response } from "express";

@Injectable()
export class AuditMiddleware implements NestMiddleware {
    // eslint-disable-next-line @typescript-eslint/ban-types
    use(req: Request, res: Response, next: Function) {
        console.log('Logging DELETE Request IP', req.ip);
        console.log('Logging DELETE Request Path', req.path);
        console.log('Logging DELETE Request Headers', req.headers);
        next();
    }

}