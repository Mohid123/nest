import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationExceptionFilter } from './filters/validation-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ValidationExceptionFilter());
  //app.useGlobalPipes(new ValidationPipe()); //these two conflict each other so they cannot be used together
  await app.listen(3000);
}
bootstrap();

// the validation pipe is checking if the data type is correct. for example: salary of type number cannot be a string in post request
// validation filter handles the errors, hence we do not need to explictly deal with error handling in our controller
