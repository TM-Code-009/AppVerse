interface Props {
  end: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
}: Props) {
  return (
    <span>
      {end}
      {suffix}
    </span>
  );
}