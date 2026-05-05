import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/", (req, res) => {
  // Logic to send email using Nodemailer
  console.log(req.body);
  try {
    // Simulate email sending logic here
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port http://localhost:${PORT}`);
});
