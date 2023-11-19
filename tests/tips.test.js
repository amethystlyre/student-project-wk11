const request = require("supertest");
const app = require("../app.js");

describe('Tips Endpoint', () => {
  test('should retrieve a list of tips when using the GET method', () => {
    return request(app)
    .get("/api/tips")
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
})


