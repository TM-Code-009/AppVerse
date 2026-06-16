import { useState } from "react";
import emailjs from "@emailjs/browser";

import { EMAILJS_CONFIG } from "../../utils/emailjs";
import SectionReveal from "../ui/SectionReveal";

export default function SuggestionForm() {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      app: "",
      reason: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.SUGGESTION_TEMPLATE,
        form,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      alert(
        "Suggestion submitted!"
      );

      setForm({
        name: "",
        email: "",
        app: "",
        reason: "",
      });
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
        max-w-3xl
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
          Suggest An App
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
          className="
          space-y-4
        "
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#111827]"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#111827]"
          />

          <input
            placeholder="Suggested App"
            value={form.app}
            onChange={(e) =>
              setForm({
                ...form,
                app: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#111827]"
          />

          <textarea
            rows={5}
            placeholder="Reason"
            value={form.reason}
            onChange={(e) =>
              setForm({
                ...form,
                reason:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#111827]"
          />

          <button
            disabled={loading}
            className="
            bg-green-500
            px-8
            py-4
            rounded-xl
          "
          >
            {loading
              ? "Sending..."
              : "Submit Suggestion"}
          </button>
        </form>
      </div>
    </section>
</SectionReveal>
  );
}