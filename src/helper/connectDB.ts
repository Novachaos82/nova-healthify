import mongoose, { ConnectOptions } from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
