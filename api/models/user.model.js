import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // User's name
      required: true, // This field is required
      unique: true, // Username must be unique
      trim: true, // Remove any leading or trailing whitespace
    },
    email: {
      type: String, // User's email
      required: true, // This field is required
      trim: true, // Remove any leading or trailing whitespace
    },
    password: {
      type: String, // User's password
      required: true, // This field is required
      trim: true, // Remove any leading or trailing whitespace
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);
export default User;
