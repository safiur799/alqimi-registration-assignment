import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:[process.env.FRONTEND_LOCAL_URL,  process.env.FRONTEND_URL],
    credentials: true,
  });

  const PORT = process.env.PORT || 5000;

  await app.listen(PORT);

  console.log(`Server is running on port ${PORT}`);
}

bootstrap();