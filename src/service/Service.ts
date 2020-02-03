import { ServiceDependencies, ServerService } from "../types";
import { strict as assert } from "assert";

export class Service implements ServerService {
  private _server:any;
  private _logger:any;

  constructor({ server,logger }: ServiceDependencies) {
    assert(server, 'need server');
    assert(logger, ' need logger');

    this._server = server;
    this._logger = logger;
  }

  start(): Promise<void> {
    return this._server.start();
  }
  stop(): Promise<void> {
    return this._server.stop();
  }
}
