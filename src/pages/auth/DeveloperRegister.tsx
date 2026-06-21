import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  registerUser,
} from "../../services/user.service";

import {
  useUserAuthStore,
} from "../../store/userAuthStores";

export default function DeveloperRegister() {
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
      name: "",
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

        const payload = {
          ...form,
          role:
            "developer",
        };

        const res =
          await registerUser(
            payload
          );

        setToken(
          res.token
        );

        localStorage.setItem(
          "userRole",
          "developer"
        );

        toast.success(
          "Developer account created"
        );

        navigate(
          "/developer/dashboard"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Registration failed"
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
          Developer Signup
        </h1>

        <p
          className="
          text-gray-400
          mb-8
        "
        >
          Upload apps and grow your audience.
        </p>

        <form
          onSubmit={submit}
          className="
          space-y-4
        "
        >
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name:
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
            transition
            py-4
            rounded-xl
            font-bold
          "
          >
            {loading
              ? "Creating..."
              : "Create Developer Account"}
          </button>
        </form>

        <p
          className="
          mt-6
          text-center
        "
        >
          Already have an account?

          <Link
            to="/developer/login"
            className="
            ml-2
            text-green-500
          "
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}