import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./user";

export interface IHobbies extends Document {
  user: IUser["_id"];
  passionLevel: string;
  name: string;
  year: number;
}

const hobbiesSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  passionLevel: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const Hobbies: Model<IHobbies> = model("Hobbies", hobbiesSchema);

export default Hobbies;