process.env.NODE_ENV = "testing";

import server from "../../index";

import User, { IUser } from "../../models/user";
import * as chai from "chai";

const expect = chai.expect;

describe("Models User", () => {

  it("should insert new user", async () => {

    const user: IUser = new User();
    user.name = "John";

    const res: IUser = await user.save();

    expect(res).to.be.an("object");
    expect(res.name).to.be.equal("John");
  });

  it("get all users", async () => {
    const users: IUser[] = await User.find({});
    expect(users).to.be.an("array");
  });

});
