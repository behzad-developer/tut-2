import { DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfiguration {
  static config() {
    return new DocumentBuilder()
      .setTitle('Tut3 Project')
      .setDescription('Tut3 Delivery System Project Api')
      .setVersion('1.0')
      .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'bearer',
      })
      .build();
  }
}
