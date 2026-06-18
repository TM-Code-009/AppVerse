import { useState } from "react";
import toast from "react-hot-toast";

import SectionReveal from "../ui/SectionReveal";
import api from "../../services/api";

export default function SuggestionForm() {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      suggestion: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(
        "/suggestions",
        form
      );

      toast.success(
        "Suggestion submitted successfully!"
      );

      setForm({
        name: "",
        email: "",
        suggestion: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to submit suggestion"
      );
    } finally {
      setLoading(false);
    }
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
              placeholder="Your Name"
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
              bg-[#111827]
            "
              required
            />

            <input
              type="email"
              placeholder="Your Email"
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
              bg-[#111827]
            "
              required
            />

            <textarea
              rows={6}
              placeholder="Tell me the app you would like to see added..."
              value={
                form.suggestion
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  suggestion:
                    e.target.value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
            "
              required
            />

            <button
              disabled={
                loading
              }
              className="
              bg-green-500
              hover:bg-green-600
              transition
              px-8
              py-4
              rounded-xl
              font-semibold
            "
            >
              {loading
                ? "Submitting..."
                : "Submit Suggestion"}
            </button>
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}