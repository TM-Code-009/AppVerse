import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  loginUser,
} from "../services/user.service";

import {
  useUserAuthStore,
} from "../store/userAuthStores";

export default function Logins() {
  const navigate =
    useNavigate();

  const { setToken } =
    useUserAuthStore();

  const [loading,
    setLoading] =
    useState(false);

  const [form,
    setForm] =
    useState({
      email: "",
      password: "",
    });

  const submit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        const res =
          await loginUser(
            form
          );

        setToken(
          res.token
        );

        toast.success(
          "Welcome back"
        );

        navigate(
          "/dashboard"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Login failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-card border border-theme rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-black mb-6">
          Login
        </h1>

        <form
          onSubmit={submit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-black/20"
          />

          <input
            type="password"
            placeholder="Password"
            value={
              form.password
            }
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-black/20"
          />

          <button
            disabled={loading}
            className="w-full bg-green-500 py-4 rounded-xl font-bold"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center">
          Don't have an account?

          <Link
            to="/register"
            className="text-green-500 ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}