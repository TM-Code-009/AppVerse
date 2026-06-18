import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Login successful");
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0b0f19]">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-card p-6 sm:p-8 rounded-3xl shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-black mb-6 text-center">
          Admin Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 sm:p-4 rounded-xl bg-[#111827] outline-none border border-gray-700 focus:border-green-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 sm:p-4 rounded-xl bg-[#111827] outline-none border border-gray-700 focus:border-green-500 transition"
          />
        </div>

        <button
          disabled={loading}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 transition py-3 sm:py-4 rounded-xl font-semibold disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}