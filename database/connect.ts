import mongoose, { ConnectOptions } from "mongoose";

type DBOptions = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const connectDB = async (url: string): Promise<void> => {
  try {
    const options: DBOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(url, options as ConnectOptions);

    console.log("Database connected");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error connecting to the database: ${error.message}`);
    } else {
      console.error(`Error connecting to the database: ${error}`);
    }
    process.exit(1);
  }
};

export default connectDB;
