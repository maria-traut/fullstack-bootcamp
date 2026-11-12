import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CharactersModule } from './characters/characters.module.js';

@Module({
  imports: [CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
