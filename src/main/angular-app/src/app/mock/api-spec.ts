import { ApiInfo } from './ApiInfo';

export class ApiSpec {
  id: String;
  swagger: String;
  info: ApiInfo;
  schemes: String[];
  host: String;
  basePath: String;
  createdTime: String;
  modifiedTime: String;
}
