import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION, envs } from 'src/config';

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await mongoose.connect(envs.databaseUrl),
  },
];
