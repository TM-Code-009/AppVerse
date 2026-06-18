import { useState } from "react";
import emailjs from "@emailjs/browser";

import { EMAILJS_CONFIG } from "../../utils/emailjs";
import SectionReveal from "../ui/SectionReveal";
import toast from "react-hot-toast";

export default function HireMe() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    projectType: "Landing Page",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.HIRE_TEMPLATE,
        form,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        budget: "",
        projectType: "Landing Page",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <SectionReveal>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-primary">
            Hire Me
          </h2>

          <form
            onSubmit={submit}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-4 rounded-xl bg-card text-primary border border-theme outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-4 rounded-xl bg-card text-primary border border-theme outline-none"
            />

            <input
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="Budget"
              className="p-4 rounded-xl bg-card text-primary border border-theme outline-none"
            />

            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="p-4 rounded-xl bg-card text-primary border border-theme outline-none"
            >
              <option>Landing Page</option>
              <option>E-commerce</option>
              <option>Dashboard</option>
              <option>Custom App</option>
            </select>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              placeholder="Project Description"
              className="md:col-span-2 p-4 rounded-xl bg-card text-primary border border-theme outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-green-500 py-4 rounded-xl text-white hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}