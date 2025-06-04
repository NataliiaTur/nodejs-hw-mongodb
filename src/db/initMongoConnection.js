import { getEnvVar } from '../utils/getEnvVar.js';
import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const url = getEnvVar('MONGODB_URL');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const db = getEnvVar('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=ClusterForNodeGoIt`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error, something with setting up mongo', e.message);
  }
};
