import { describe, it } from 'mocha';
import * as should from 'should';
import * as Response from '../lib/success';

describe('success', function() {
  describe('parse', function() {
    it('contains status code', function() {
      const res = Response.parse(200, 'contains status code');
      should(res).has.hasOwnProperty('statusCode');
      should(res.statusCode)
        .be.Number()
        .and.eql(200);
    });

    it('contains success boolean', function() {
      const res = Response.parse(200, 'contains success boolean');
      should(res).has.hasOwnProperty('success');
      should(res.success)
        .be.Boolean()
        .and.eql(true);
    });

    it('contains data object', function() {
      const res = Response.parse(200, { foo: 'bar' });
      should(res).has.hasOwnProperty('data');
      should(res.data)
        .be.Object()
        .and.hasOwnProperty('foo');
    });

    it('contains others keys', function() {
      const res = Response.parse(200, 'contains others keys', { foo: 'bar' });
      should(res).has.hasOwnProperty('foo');
      should(res.foo)
        .be.String()
        .and.eql('bar');
    });
  });
});
