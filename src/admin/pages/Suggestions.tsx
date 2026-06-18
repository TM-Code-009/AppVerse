import {
  useEffect,
  useState,
} from "react";

import {
  FaLightbulb,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

import {
  getSuggestions,
} from "../../services/suggestion.service";

export default function Suggestions() {
  const [loading,
    setLoading] =
    useState(true);

  const [suggestions,
    setSuggestions] =
    useState<any[]>([]);

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions =
    async () => {
      try {
        const data =
          await getSuggestions();

        setSuggestions(
          data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="p-8">
        Loading Suggestions...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="
          text-3xl
          md:text-4xl
          font-black
        "
        >
          Suggestions
        </h1>

        <p
          className="
          text-gray-400
          mt-2
        "
        >
          User submitted app suggestions
        </p>
      </div>

      <div
        className="
        grid
        gap-6
      "
      >
        {suggestions.length ===
        0 ? (
          <div
            className="
            bg-[#111827]
            p-10
            rounded-3xl
            text-center
          "
          >
            No suggestions found
          </div>
        ) : (
          suggestions.map(
            (
              suggestion
            ) => (
              <div
                key={
                  suggestion._id
                }
                className="
                bg-[#111827]
                border
                border-white/10
                rounded-3xl
                p-6
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  mb-4
                "
                >
                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-green-500/20
                    text-green-500
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <FaLightbulb />
                  </div>

                  <div>
                    <h3
                      className="
                      font-bold
                      text-lg
                    "
                    >
                      New Suggestion
                    </h3>

                    <p
                      className="
                      text-sm
                      text-gray-400
                    "
                    >
                      {new Date(
                        suggestion.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div
                  className="
                  space-y-3
                "
                >
                  <p
                    className="
                    flex
                    items-center
                    gap-2
                  "
                  >
                    <FaUser />

                    {
                      suggestion.name
                    }
                  </p>

                  <p
                    className="
                    flex
                    items-center
                    gap-2
                  "
                  >
                    <FaEnvelope />

                    {
                      suggestion.email
                    }
                  </p>

                  <div
                    className="
                    mt-4
                    p-4
                    rounded-xl
                    bg-black/20
                  "
                  >
                    {
                      suggestion.suggestion
                    }
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}