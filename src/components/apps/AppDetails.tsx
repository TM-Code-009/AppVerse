import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api"

interface App {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export default function AppDetails() {
  const { id } = useParams();

  const [app, setApp] =
    useState<App | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      notes: "",
    });

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp =
    async () => {
      try {
        const res =
          await api.get(`/apps/${id}`);

        setApp(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const submitRequest =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await api.post(
          "/requests",
          {
            appId: app?._id,
            appTitle: app?.title,
            ...form,
          }
        );

        toast.success(
          "Request submitted successfully"
        );

        setForm({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          notes: "",
        });
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to submit request"
        );
      }
    };

  if (loading) {
    return (
      <div className="py-24 text-center">
        Loading...
      </div>
    );
  }

  if (!app) {
    return (
      <div className="py-24 text-center">
        App not found
      </div>
    );
  }

  return (
    <section
      className="
      py-20
      px-6
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-10
      "
      >
        <div>
          <img
            src={app.image}
            alt={app.title}
            className="
            w-full
            rounded-3xl
          "
          />
        </div>

        <div>
          <span
            className="
            text-green-500
          "
          >
            {app.category}
          </span>

          <h1
            className="
            text-5xl
            font-black
            mt-3
          "
          >
            {app.title}
          </h1>

          <p
            className="
            text-3xl
            font-bold
            text-green-500
            mt-4
          "
          >
            ₦
            {app.price?.toLocaleString()}
          </p>

          <p
            className="
            mt-6
            text-gray-400
            leading-relaxed
          "
          >
            {app.description}
          </p>

          <form
            onSubmit={
              submitRequest
            }
            className="
            mt-10
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
              bg-card
            "
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
              className="
              w-full
              p-4
              rounded-xl
              bg-card
            "
            />

            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone:
                    e.target.value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-card
            "
            />

            <input
              placeholder="Business Name"
              value={
                form.businessName
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  businessName:
                    e.target.value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-card
            "
            />

            <textarea
              rows={5}
              placeholder="Project Notes"
              value={form.notes}
              onChange={(e) =>
                setForm({
                  ...form,
                  notes:
                    e.target.value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-card
            "
            />

            <button
              className="
              w-full
              bg-green-500
              hover:bg-green-600
              py-4
              rounded-xl
              font-bold
            "
            >
              Request This App
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}