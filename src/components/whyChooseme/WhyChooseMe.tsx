import {
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
  },

  {
    icon: <FaCode />,
    title: "Clean Code",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
  },

  {
    icon: <FaBolt />,
    title: "Modern Technologies",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-center
          text-4xl
          font-black
          mb-16
        "
        >
          Why Choose Me
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
        "
        >
          {reasons.map(
            (reason, index) => (
              <div
                key={index}
                className="
                text-center
                p-6
                rounded-3xl
                bg-[#111827]
              "
              >
                <div
                  className="
                  text-green-400
                  text-4xl
                  mb-4
                "
                >
                  {reason.icon}
                </div>

                <h3 className="text-white" >
                  {reason.title}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}