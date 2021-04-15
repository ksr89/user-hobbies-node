process.env.NODE_ENV = "testing";

import chai from "chai";
import chaiHttp from 'chai-http';

import server from "../../index";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Api User", function (): void {

  it("should be able to create user", (done: Function): void => {
    chai.request(server)
      .post("/user")
      .set("content-type", "application/json")
      .send({
        name: "Peter",
      })
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.name).to.be.equal("Peter");
        done();
      });
  });

  it("should be able to get users", (done: Function): void => {
    chai.request(server)
      .get("/user")
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.length).to.be.length;
        done();
      });
  });
});