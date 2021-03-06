import { NestContainer } from '@nestjs/core/injector/container';
import { MicroserviceOptions } from './interfaces/microservice-configuration.interface';
import {
  INestMicroservice,
  WebSocketAdapter,
  CanActivate,
  PipeTransform,
  NestInterceptor,
  ExceptionFilter,
  OnModuleInit,
} from '@nestjs/common';
import { ApplicationConfig } from '@nestjs/core/application-config';
import { Module } from '@nestjs/core/injector/module';
import { NestApplicationContext } from '@nestjs/core/nest-application-context';
export declare class NestMicroservice extends NestApplicationContext
  implements INestMicroservice {
  private readonly applicationConfig;
  private readonly logger;
  private readonly microservicesModule;
  private readonly socketModule;
  private microserviceConfig;
  private server;
  private isTerminated;
  private isInitialized;
  private isInitHookCalled;
  constructor(
    container: NestContainer,
    config: MicroserviceOptions,
    applicationConfig: ApplicationConfig,
  );
  registerWsAdapter(): void;
  createServer(config: MicroserviceOptions): void;
  registerModules(): void;
  registerListeners(): void;
  useWebSocketAdapter(adapter: WebSocketAdapter): this;
  useGlobalFilters(...filters: ExceptionFilter[]): this;
  useGlobalPipes(...pipes: PipeTransform<any>[]): this;
  useGlobalInterceptors(...interceptors: NestInterceptor[]): this;
  useGlobalGuards(...guards: CanActivate[]): this;
  listen(callback: () => void): void;
  listenAsync(): Promise<any>;
  close(): void;
  setIsInitialized(isInitialized: boolean): void;
  setIsTerminated(isTerminaed: boolean): void;
  setIsInitHookCalled(isInitHookCalled: boolean): void;
  protected closeApplication(): void;
  protected callInitHook(): void;
  protected callModuleInitHook(module: Module): void;
  protected hasOnModuleInitHook(instance: any): instance is OnModuleInit;
  private callDestroyHook();
  private callModuleDestroyHook(module);
  private hasOnModuleDestroyHook(instance);
}
