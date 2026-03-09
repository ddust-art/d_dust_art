import express from "express";
import cors from "cors";
import axios from "axios";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const BREVO_API = "https://api.brevo.com/v3/contacts";
const API_KEY = process.env.BREVO_API_KEY;

app.post("/api/subscribe", async (req, res) => {
  const { email, fname, lname, inst, type } = req.body;

  try {
    await axios.post(
      BREVO_API,
      {
        email: email,
        attributes: {
          FIRSTNAME: fname,
          LASTNAME: lname,
          INSTITUTION: inst,
          CATEGORY: type,
        },
        listIds: [2], //Brevo's newsletter list ID
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log("Newsletter API running".bgGreen.bold);
});
