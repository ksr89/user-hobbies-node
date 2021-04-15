process.env.NODE_ENV = "testing";

import server from "../../index";

import User, { IUser } from "../../models/user";
import Hobbies, { IHobbies } from "../../models/hobbies";
import * as chai from "chai";

const expect = chai.expect;

describe("Hobbies Model", () => {

  it("should insert new hobbies", (done: Function) => {

    const user = new User();
    user.name = "John";

    user.save(async (err, _res: IUser) => {

      expect(_res).to.be.an("object");
      expect(_res.name).to.be.equal("John");

      await Hobbies.create({
        user: _res,
        passionLevel: 'string',
        name: 'string',
        year: 1234,
      }, {
        user: _res,
        passionLevel: 'string',
        name: 'string',
        year: 1234,
      });

      const hobbies = await Hobbies.find({
        user: _res
      });

      expect(hobbies).to.be.length(2);
      done();
    });

  });

});