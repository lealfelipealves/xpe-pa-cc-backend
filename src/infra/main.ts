import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  })

  // Configuração CORS para liberar todas as origens
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  })

  const configService = app.get(EnvService)
  const port = configService.get('APP_PORT')

  const config = new DocumentBuilder()
    .setTitle('Fast food API')
    .setDescription(
      'Sistema de fast food API para gerenciamento de pedidos, cardápio e clientes.',
    )
    .setVersion('1.0')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, documentFactory)

  await app.listen(port)
}
bootstrap()
