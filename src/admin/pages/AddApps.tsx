import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import api from "../../services/api";

export default function AddApp() {
const navigate = useNavigate();

const [loading, setLoading] =
useState(false);

const [image, setImage] =
useState<File | null>(null);

const [preview, setPreview] =
useState("");

const [form, setForm] =
useState({
title: "",
description: "",
category: "",
price: 0,
demoUrl: "",
url: "",
status: "Available",
featured: false,
});

const handleImage = (
e: React.ChangeEvent<HTMLInputElement>
) => {
const file =
e.target.files?.[0];


if (!file) return;

setImage(file);

setPreview(
  URL.createObjectURL(file)
);


};

const submit = async (
e: React.FormEvent
) => {
e.preventDefault();

if (!image) {
  return toast.error(
    "Please select an image"
  );
}

try {
  setLoading(true);

  const data =
    new FormData();

  Object.entries(form).forEach(
    ([key, value]) => {
      data.append(
        key,
        String(value)
      );
    }
  );

  data.append(
    "image",
    image
  );

  await api.post(
    "/apps",
    data
  );

  toast.success(
    "App created successfully"
  );

  navigate(
    "/admin/apps"
  );
} catch (error) {
  console.log(error);

  toast.error(
    "Failed to create app"
  );
} finally {
  setLoading(false);
}


};

return ( 
<div className="max-w-5xl mx-auto px-4 py-6"> <div
     className="
     bg-[#111827]
     rounded-3xl
     border
     border-white/10
     p-6
     md:p-8
   "
   > <h1
       className="
       text-3xl
       md:text-4xl
       font-black
       mb-8
     "
     >
Add New App </h1>


    <form
      onSubmit={submit}
      className="space-y-6"
    >
      <input
        placeholder="App Title"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title:
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

      <textarea
        rows={5}
        placeholder="Description"
        value={
          form.description
        }
        onChange={(e) =>
          setForm({
            ...form,
            description:
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

      <div
        className="
        grid
        md:grid-cols-2
        gap-4
      "
      >
        <select
          value={
            form.category
          }
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
          className="
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
          "
        >
          <option value="">
            Select Category
          </option>

          <option>
            Productivity
          </option>

          <option>
            Education
          </option>

          <option>
            E-commerce
          </option>

          <option>
            Finance
          </option>

          <option>
            Healthcare
          </option>

          <option>
            Social
          </option>
        </select>

        <input
          type="number"
          placeholder="Price (₦)"
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price:
                Number(
                  e.target.value
                ),
            })
          }
          className="
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
          "
        />
      </div>

      <input
        placeholder="Demo URL"
        value={
          form.demoUrl
        }
        onChange={(e) =>
          setForm({
            ...form,
            demoUrl:
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
        placeholder="Purchase URL"
        value={form.url}
        onChange={(e) =>
          setForm({
            ...form,
            url:
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

      <select
        value={
          form.status
        }
        onChange={(e) =>
          setForm({
            ...form,
            status:
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
      >
        <option value="Available">
          Available
        </option>

        <option value="Coming Soon">
          Coming Soon
        </option>

        <option value="Sold">
          Sold
        </option>
      </select>

      <div>
        <label
          className="
          block
          mb-3
          font-medium
        "
        >
          App Image
        </label>

        <label
          className="
          border-2
          border-dashed
          border-white/20
          rounded-2xl
          p-8
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
        "
        >
          <FaCloudUploadAlt
            size={40}
            className="
            text-green-500
            mb-4
          "
          />

          <span>
            Click to upload
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImage
            }
            className="hidden"
          />
        </label>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="
              mt-5
              h-56
              rounded-2xl
              object-cover
            "
          />
        )}
      </div>

      <label
        className="
        flex
        items-center
        gap-3
      "
      >
        <input
          type="checkbox"
          checked={
            form.featured
          }
          onChange={(e) =>
            setForm({
              ...form,
              featured:
                e.target.checked,
            })
          }
        />

        Featured App
      </label>

      <button
        disabled={loading}
        className="
          w-full
          md:w-auto
          bg-green-500
          hover:bg-green-600
          transition
          px-8
          py-4
          rounded-xl
          font-bold
        "
      >
        {loading
          ? "Creating..."
          : "Create App"}
      </button>
    </form>
  </div>
</div>


);
}
