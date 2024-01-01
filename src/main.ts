import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as pkgInfo from './version.json';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Smart Irrigation Backend API')
    .setDescription('Smart Irrigation Backend API Description')
    .setVersion(pkgInfo.version)
    .setContact(
      'High Performance Computing Center',
      'hpcc.vn',
      'hpcc@hcmut.edu.vn',
    )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3003);
}
bootstrap();
