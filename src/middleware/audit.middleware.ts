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

//This middleware is being used to check the response of the delete request inside the console...
//The response shows: what was selected, what the headers applied were and what was the path of the request being sent