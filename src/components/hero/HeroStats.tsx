import AnimatedCounter from "../ui/AnimatedCounter";

export default function HeroStats() {
  return (
    <div
      className="
        mt-16
        grid
        grid-cols-3
        gap-8
      "
    >
      <div>
        <h3
          className="
            text-4xl
            font-bold
          "
        >
          <AnimatedCounter
            end={20}
            suffix="+"
          />
        </h3>

        <p>Apps</p>
      </div>

      <div>
        <h3
          className="
            text-4xl
            font-bold
          "
        >
          <AnimatedCounter
            end={100}
            suffix="+"
          />
        </h3>

        <p>Visitors</p>
      </div>

      <div>
        <h3
          className="
            text-4xl
            font-bold
          "
        >
          <AnimatedCounter
            end={50}
            suffix="+"
          />
        </h3>

        <p>Suggestions</p>
      </div>
    </div>
  );
}