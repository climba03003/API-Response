import { describe, it } from 'mocha';
import * as should from 'should';
import * as Response from '../lib/error';

describe('error', function() {
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
        .and.eql(false);
    });

    it('contains error message', function() {
      const res = Response.parse(200, 'contains error message');
      should(res).has.hasOwnProperty('message');
    });

    it('contains others keys', function() {
      const res = Response.parse(200, 'contains others keys', { foo: 'bar' });
      should(res).has.hasOwnProperty('foo');
      should(res.foo)
        .be.String()
        .and.eql('bar');
    });

    it('can pass Error', function() {
      const res = Response.parse(200, new Error('can pass Error'));
      should(res).has.hasOwnProperty('message');
      should(res.message)
        .be.String()
        .and.eql('can pass Error');
    });

    it('can pass fake Error', function() {
      const res = Response.parse(200, {});
      should(res).has.hasOwnProperty('message');
      should(res.message)
        .be.String()
        .and.eql('');
    });
  });
});
