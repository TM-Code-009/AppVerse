import {
  useEffect,
  useState,
} from "react";

import {
  FaBriefcase,
  FaUser,
  FaEnvelope,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  getHires,
} from "../../services/hire.service";

export default function HireRequests() {
  const [loading,
    setLoading] =
    useState(true);

  const [hires,
    setHires] =
    useState<any[]>([]);

  useEffect(() => {
    loadHires();
  }, []);

  const loadHires =
    async () => {
      try {
        const data =
          await getHires();

        setHires(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="p-8">
        Loading Hire Requests...
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
          Hire Requests
        </h1>

        <p
          className="
          text-gray-400
          mt-2
        "
        >
          Potential client inquiries
        </p>
      </div>

      <div className="grid gap-6">
        {hires.length === 0 ? (
          <div
            className="
            bg-[#111827]
            p-10
            rounded-3xl
            text-center
          "
          >
            No hire requests found
          </div>
        ) : (
          hires.map((hire) => (
            <div
              key={hire._id}
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
                mb-6
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
                  <FaBriefcase />
                </div>

                <div>
                  <h3
                    className="
                    font-bold
                    text-lg
                  "
                  >
                    {hire.projectType}
                  </h3>

                  <p
                    className="
                    text-sm
                    text-gray-400
                  "
                  >
                    {new Date(
                      hire.createdAt
                    ).toLocaleString()}
                  </p>
                </div>
              </div>

              <div
                className="
                grid
                md:grid-cols-2
                gap-4
                mb-6
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-2
                "
                >
                  <FaUser />
                  {hire.name}
                </div>

                <div
                  className="
                  flex
                  items-center
                  gap-2
                "
                >
                  <FaEnvelope />
                  {hire.email}
                </div>

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-green-500
                "
                >
                  <FaMoneyBillWave />
                  {hire.budget}
                </div>
              </div>

              <div
                className="
                p-4
                rounded-xl
                bg-black/20
              "
              >
                <h4
                  className="
                  font-semibold
                  mb-2
                "
                >
                  Project Description
                </h4>

                <p
                  className="
                  text-gray-300
                "
                >
                  {hire.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}