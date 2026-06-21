import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  registerUser,
} from "../services/user.service";

import {
  useUserAuthStore,
} from "../store/userAuthStores";

export default function Register() {
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
      role: "developer",
    });

  const submit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        const res =
          await registerUser(
            form
          );

        setToken(
          res.token
        );

        toast.success(
          "Account created successfully"
        );

        navigate(
          "/dashboard"
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
        py-10
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
          Create Account
        </h1>

        <p
          className="
            text-gray-400
            mb-8
          "
        >
          Join AppVerse today
        </p>

        <form
          onSubmit={submit}
          className="
            space-y-5
          "
        >
          <input
            type="text"
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
              outline-none
            "
            required
          />

          <input
            type="email"
            placeholder="Email Address"
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
              outline-none
            "
            required
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
              outline-none
            "
            required
          />

          <select
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role:
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
              outline-none
            "
          >
            <option value="developer">
              Developer
            </option>

            <option value="client">
              User
            </option>
          </select>

          <button
            type="submit"
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
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p
          className="
            text-center
            mt-6
            text-gray-400
          "
        >
          Already have an account?

          <Link
            to="/login"
            className="
              text-green-500
              ml-2
            "
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}