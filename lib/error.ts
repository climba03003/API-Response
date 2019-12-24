import { HTTPStatusCode } from './status-code';

export interface ErrorResponse {
  statusCode: HTTPStatusCode;
  success: false;
  message: any;
  [key: string]: any;
}

export function parse(code: HTTPStatusCode, err: any, obj?: any): ErrorResponse {
  return Object.assign(
    {
      statusCode: code,
      success: false,
      message: err?.message ?? ''
    },
    obj
  );
}
