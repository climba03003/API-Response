import { describe, it } from 'mocha';
import * as should from 'should';
import { HTTPStatusCode } from '../lib/status-code';

describe('HTTPStatusCode', function() {
  describe('number to word', function() {
    it('200', function() {
      should(HTTPStatusCode[200])
        .be.String()
        .and.eql('OK');
    });
  });

  describe('word to number', function() {
    it('OK', function() {
      should(HTTPStatusCode.OK)
        .be.Number()
        .and.eql(200);
    });
  });
});
