'use strict';

require('../fuber.js');
var expect = require('chai').expect;
var async = require('async');

const GET_CAB_LOCATION ='/cab/location'; 
const Update_CUSTOMER_LOCATION ='/cust/location';

 describe("Verfiy Cab API", function() {
  it('Test CAB location', function (done) {
    server
      .get(GET_CAB_LOCATION + '?Any queryparma we can pass here')
      .set('Accept', 'application/json')
      .set('trace-id', uuid())
      .expect('Content-type', 'json')
      .expect(200)
      .end(function (err, res) {
        let body = res.body;
        expect(body).to.not.equal('null');
        expect(body.Resources).to.be.an('Array');    
        done();
      });
  });


  it('Test Customer Update location', function (done) {
    responseObj.customer.location = 'new.' + responseObj.customer.location;
    utils.PutRequestFactory(utils.ORG_URL, responseObj,
      function (err, res) {
        expect(res.statusCode).to.equal(204);
        done();
      });
  });
});
