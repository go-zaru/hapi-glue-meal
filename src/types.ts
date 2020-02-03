// Generic example types; derived from acutal usage
import { Server } from '@hapi/hapi';
import { Logger } from '@gozaru/logger';

export type StaticData = string | boolean | number | undefined;

export type AnyData = StaticData | Object;

export interface OptionalData {
  [key:string]: AnyData | AnyData[];
}

export interface ServiceDependencies {
  server: Server;
  logger: Logger;
}

export interface Plugin {
  pluign: string,
  options?:{ [key:string]:any };
  routes?:{ prefix:string }
}

export interface ServiceConfig extends OptionalData {
  serverConfig: {
    server: { port: number }
    plugins?:Plugin[]
  };
  loggerConfig: Object
}

export interface ServerService {
  start(): Promise<void>;
  stop(): Promise<void>;
}
