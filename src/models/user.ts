import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const User: Model<IUser> = model("User", userSchema);

export default User;
