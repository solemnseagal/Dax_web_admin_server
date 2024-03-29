import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
@Module({
  imports: [ ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
