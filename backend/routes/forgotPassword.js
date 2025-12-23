const express = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();
let otpStore = {}; // temporary in-memory store

// ✅ Step 1: Request OTP
router.post("/request-otp", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("📩 OTP request for:", email);

    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    otpStore[email] = { otp, expires: Date.now() + 10 * 60 * 1000 }; // 10 mins expiry
    console.log("✅ Generated OTP:", otp);

    // Send Email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`,
    });

    console.log("📤 OTP sent successfully to:", email);
    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("❌ Error in request-otp:", error.message);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// ✅ Step 2: Reset Password
router.post("/reset-password", async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!otpStore[email]) {
      return res.status(400).json({ message: "OTP not requested or expired" });
    }

    const record = otpStore[email];
    if (record.expires < Date.now()) {
      delete otpStore[email];
      return res.status(400).json({ message: "OTP expired" });
    }

    if (parseInt(otp) !== record.otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    delete otpStore[email];

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("❌ Error in reset-password:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
