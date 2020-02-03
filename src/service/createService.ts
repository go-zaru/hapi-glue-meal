import { ServiceConfig, ServerService } from "../types";
import { compose } from '@hapi/glue';
import { Service } from './Service';
import { createLogger } from '@gozaru/logger';

const defaultOptions = { relativeTo: __dirname };

const defaultManifest = {
  server: {　port: 8000 },
  register: { plugins: [] }
};

export const createService = async (config: ServiceConfig):Promise<ServerService> => {
  const { serverConfig, loggerConfig } = config;
  const { server, plugins } = serverConfig;
  const logConfig = {...loggerConfig, name:'API Server'};
  const logger = createLogger({loggerConfig: logConfig});
  const manifest = Object.assign({}, defaultManifest, { server, register:{ plugins } });
  const h = await compose(manifest, defaultOptions);

  return new Service({server: h, logger})
};
