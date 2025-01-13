const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done(error);
    });
  });

  it('should return the correct message', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done(error);
    });
  });

  it('should return a response with the correct content type', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done(error);
    });
  });
});

describe('Cart page', () => {
  const cartBaseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 for a valid cart id', (done) => {
    request.get(`${cartBaseUrl}12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done(error);
    });
  });

  it('should return status code 404 for an invalid cart id', (done) => {
    request.get(`${cartBaseUrl}hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done(error);
    });
  });
});
