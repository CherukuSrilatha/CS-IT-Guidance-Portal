import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRequestOTP = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/forgot-password/request-otp", { email });
      alert(res.data.message);
      navigate("/reset-password", { state: { email } }); // pass email to reset page
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button onClick={handleRequestOTP} className="w-full bg-blue-500 text-white">
          Request OTP
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
