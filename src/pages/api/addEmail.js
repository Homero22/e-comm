// pages/api/addEmail.js

import { google } from "googleapis";
//import path from "path";
//import { promises as fs } from "fs";

export default async function handler(req, res) {

    
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Correo es requerido" });
  }

  try {
    console.log("addEmail.js", email);
    const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        projectId: process.env.GOOGLE_PROJECT_ID,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

    const sheets = google.sheets({ version: "v4", auth });

    // ID de tu hoja de Google Sheets y rango donde quieres agregar los correos
    const spreadsheetId = "1_50X12Xl_Lx8NpG3KxHTXwEuAQXdPNlhqw0YKOJjB6k";
    const range = "correos!A:A"; // Cambia "Hoja1" por el nombre de tu hoja

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[email]],
      },
    });

    res.status(200).json({ message: "Correo guardado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el correo:", error);
    res.status(500).json({ message: "Error al guardar el correo" });
  }
}
