import { Mongoose } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/config';
import {
  USER_MODEL,
  UserSchema,
  userCollectionName,
} from 'src/database/schemas/user.schema';

export const authProviders = [
  {
    provide: USER_MODEL,
    useFactory: (mongoose: Mongoose) =>
      mongoose.model(userCollectionName, UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
