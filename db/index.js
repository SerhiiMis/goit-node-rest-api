import { sequelize } from "./sequelize.js";
import "../models/user.js";
import "../models/contact.js";

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection successful");

    await sequelize.sync();
    console.log("✅ Models synchronized with the database");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};
