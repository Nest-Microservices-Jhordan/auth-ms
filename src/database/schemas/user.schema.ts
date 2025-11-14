import * as mongoose from 'mongoose';

export const USER_MODEL = 'USER_MODEL';
export const userCollectionName = 'User';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
