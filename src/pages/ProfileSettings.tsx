import {
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  FaCloudUploadAlt,
} from "react-icons/fa";

import {
  updateProfile,
} from "../services/user.service";

export default function ProfileSettings() {
  const [loading,
    setLoading] =
    useState(false);

  const [avatar,
    setAvatar] =
    useState<File | null>(
      null
    );

  const [preview,
    setPreview] =
    useState("");

  const [form,
    setForm] =
    useState({
      bio: "",
      location: "",
      skills: "",
      website: "",
      github: "",
      linkedin: "",
    });

  const handleAvatar =
    (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file =
        e.target.files?.[0];

      if (!file) return;

      setAvatar(file);

      setPreview(
        URL.createObjectURL(
          file
        )
      );
    };

  const submit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        const data =
          new FormData();

        data.append(
          "bio",
          form.bio
        );

        data.append(
          "location",
          form.location
        );

        data.append(
          "website",
          form.website
        );

        data.append(
          "github",
          form.github
        );

        data.append(
          "linkedin",
          form.linkedin
        );

        data.append(
          "skills",
          JSON.stringify(
            form.skills
              .split(",")
              .map((s) =>
                s.trim()
              )
          )
        );

        if (avatar) {
          data.append(
            "avatar",
            avatar
          );
        }

        await updateProfile(
          data
        );

        toast.success(
          "Profile updated"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Update failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <section
      className="
      py-20
      px-6
    "
    >
      <div
        className="
        max-w-4xl
        mx-auto
      "
      >
        <div
          className="
          bg-card
          border
          border-theme
          rounded-3xl
          p-8
        "
        >
          <h1
            className="
            text-4xl
            font-black
            mb-8
          "
          >
            Profile Settings
          </h1>

          <form
            onSubmit={
              submit
            }
            className="
            space-y-6
          "
          >
            <label
              className="
              border-2
              border-dashed
              border-theme
              rounded-2xl
              p-8
              flex
              flex-col
              items-center
              cursor-pointer
            "
            >
              <FaCloudUploadAlt
                size={40}
              />

              <span
                className="
                mt-3
              "
              >
                Upload Avatar
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleAvatar
                }
                className="hidden"
              />
            </label>

            {preview && (
              <img
                src={
                  preview
                }
                alt=""
                className="
                w-32
                h-32
                rounded-full
                object-cover
              "
              />
            )}

            <textarea
              rows={4}
              placeholder="Bio"
              value={
                form.bio
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  bio:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <input
              placeholder="Location"
              value={
                form.location
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  location:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <input
              placeholder="Skills (React, Node.js, TypeScript)"
              value={
                form.skills
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  skills:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <input
              placeholder="Website"
              value={
                form.website
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  website:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <input
              placeholder="Github"
              value={
                form.github
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  github:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <input
              placeholder="LinkedIn"
              value={
                form.linkedin
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  linkedin:
                    e.target
                      .value,
                })
              }
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
            "
            />

            <button
              disabled={
                loading
              }
              className="
              bg-green-500
              hover:bg-green-600
              px-8
              py-4
              rounded-xl
              font-bold
            "
            >
              {loading
                ? "Saving..."
                : "Save Profile"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}