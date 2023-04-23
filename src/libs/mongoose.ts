import mongoose, { Mongoose } from "mongoose";

const MONGOOSE_URL = process.env.NEXT_PUBLIC_MONGOOSE_KEY as string;

if (!MONGOOSE_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface IConnect {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: IConnect = { conn: null, promise: null };

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGOOSE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
