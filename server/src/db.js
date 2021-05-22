import monk from "monk";
import dotenv from "dotenv";

dotenv.config();

const db = monk(process.env.DATABASE_URL);

db.then(() => {
  console.log("Connected correctly to server");
});

export default db;
