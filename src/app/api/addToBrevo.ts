// src/pages/api/addToBrevo.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, nome } = req.body;

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        attributes: { FIRSTNAME: nome || "" },
        listIds: [1], // ID da sua lista no Brevo
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY!,
          "Content-Type": "application/json",
        }
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    res.status(400).json({ success: false, error: error.response?.data });
  }
}
