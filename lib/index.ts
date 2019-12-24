import { HTTPStatusCode } from './status-code';
import { parse as error, ErrorResponse } from './error';
import { parse as success, SuccessResponse } from './success';

export declare type ResponseType = ErrorResponse | SuccessResponse;
export * from './status-code';
export { error, success };
export default Object.assign({}, HTTPStatusCode, {
  error: error,
  success: success
});
