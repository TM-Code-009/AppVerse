import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  loginUser,
} from "../../services/user.service";

import {
  useUserAuthStore,
} from "../../store/userAuthStores";

export default function DeveloperLogin() {
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

        localStorage.setItem(
          "userRole",
          res.data.role
        );

        navigate(
          "/developer/dashboard"
        );

        toast.success(
          "Welcome back"
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
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
    "
    >
      <div
        className="
        w-full
        max-w-md
        bg-[#111827]
        border
        border-white/10
        rounded-3xl
        p-8
      "
      >
        <h1
          className="
          text-4xl
          font-black
          mb-2
        "
        >
          Developer Login
        </h1>

        <p
          className="
          text-gray-400
          mb-8
        "
        >
          Access your developer dashboard.
        </p>

        <form
          onSubmit={submit}
          className="
          space-y-4
        "
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
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
          "
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
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
          "
          />

          <button
            disabled={loading}
            className="
            w-full
            bg-green-500
            hover:bg-green-600
            py-4
            rounded-xl
            font-bold
          "
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        <p
          className="
          mt-6
          text-center
        "
        >
          Need an account?

          <Link
            to="/developer/register"
            className="
            ml-2
            text-green-500
          "
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}