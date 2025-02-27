import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization', 'set-cookie'],
		exposedHeaders: 'set-cookie'
	})

	// const PORT = process.env.PORT || 3001
	const PORT = 3001
	await app.listen(PORT)
}
bootstrap()
