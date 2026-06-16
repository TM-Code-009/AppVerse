import { useState } from "react";
import emailjs from "@emailjs/browser";

import { EMAILJS_CONFIG } from "../../utils/emailjs";
import SectionReveal from "../ui/SectionReveal";
import toast from "react-hot-toast";

export default function HireMe() {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      budget: "",
      projectType: "",
      description: "",
    });

  const submit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.HIRE_TEMPLATE,
        form,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success(
  "Message sent successfully!"
);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <SectionReveal>
  
    <section
      className="
      py-24
      px-6
    "
    >
      <div
        className="
        max-w-4xl
        mx-auto
      "
      >
        <h2
          className="
          text-4xl
          font-black
          mb-8
        "
        >
          Hire Me
        </h2>

        <form
          onSubmit={submit}
          className="
          grid
          md:grid-cols-2
          gap-4
        "
        >
          <input
            placeholder="Name"
            className="p-4 rounded-xl bg-[#111827]"
          />

          <input
            placeholder="Email"
            className="p-4 rounded-xl bg-[#111827]"
          />

          <input
            placeholder="Budget"
            className="p-4 rounded-xl bg-[#111827]"
          />

          <select
            className="p-4 rounded-xl bg-[#111827]"
          >
            <option>
              Landing Page
            </option>

            <option>
              E-commerce
            </option>

            <option>
              Dashboard
            </option>

            <option>
              Custom App
            </option>
          </select>

          <textarea
            rows={5}
            placeholder="Project Description"
            className="
              md:col-span-2
              p-4
              rounded-xl
              bg-[#111827]
            "
          />

          <button
            className="
            md:col-span-2
            bg-green-500
            py-4
            rounded-xl
          "
          >
            {loading
              ? "Sending..."
              : "Send Request"}
          </button>
        </form>
      </div>
    </section>
</SectionReveal>
  );
}