import { HTTPStatusCode } from './status-code';

export interface SuccessResponse {
  statusCode: HTTPStatusCode;
  success: true;
  data: any;
  [key: string]: any;
}

export function parse(code: HTTPStatusCode, data: any, obj?: any): SuccessResponse {
  return Object.assign(
    {
      statusCode: code,
      success: true,
      data: data
    },
    obj
  );
}
