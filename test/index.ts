import { describe, it } from 'mocha';
import * as should from 'should';
import * as Response from '../lib';

describe('lib', function() {
  describe('contains', function() {
    it('HTTPStatusCode', function() {
      should(Response).hasOwnProperty('HTTPStatusCode');
    });

    it('error', function() {
      should(Response).hasOwnProperty('error');
    });

    it('success', function() {
      should(Response).hasOwnProperty('success');
    });
  });
});
