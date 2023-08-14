import dotenv from 'dotenv'
import {MongoClient} from 'mongodb';
dotenv.config();
export async function con() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_DB}.tuhkln0.mongodb.net/`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    return client.db();
  } catch (error) {
    return {status: 500, message: error};
  }
}