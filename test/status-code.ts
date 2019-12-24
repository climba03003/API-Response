import { describe, it } from 'mocha';
import * as should from 'should';
import { HTTPStatusCode } from '../lib/status-code';

describe('HTTPStatusCode', function() {
  describe('number to word', function() {
    it('200', function() {
      should(HTTPStatusCode[200])
        .be.String()
        .and.eql(HTTPStatusCode.ACCEPTED);
    });
  });

  describe('word to number', function() {
    it('ACCEPTED', function() {
      should(HTTPStatusCode.ACCEPTED)
        .be.Number()
        .and.eql(HTTPStatusCode[200]);
    });
  });
});
