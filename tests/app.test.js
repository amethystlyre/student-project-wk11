const request = require("supertest");
const app = require("../app.js");

describe('Public page routing', () => {

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("Test the feedback path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/feedback")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("Test the 404 path", () => {
    test("It should respond when user enters a path that doesn't exist", () => {
      return request(app)
        .get("/randomlink")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

});

