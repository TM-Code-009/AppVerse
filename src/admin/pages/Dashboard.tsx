import {
  useEffect,
  useState,
} from "react";

import StatCard from "../components/StatsCard";

import {
  getStats,
} from "../../services/dashboard.service";

export default function Dashboard() {
  const [stats,
    setStats] =
    useState<any>(
      null
    );

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats =
    async () => {
      const data =
        await getStats();

      setStats(data);
    };

  if (!stats)
    return (
      <p>
        Loading...
      </p>
    );

  return (
    <div>
      <h1
        className="
          text-4xl
          font-black
          mb-8
        "
      >
        Dashboard
      </h1>

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-5
          gap-6
        "
      >
        <StatCard
          title="Apps"
          value={
            stats.totalApps
          }
        />

        <StatCard
          title="Featured"
          value={
            stats.featuredApps
          }
        />

        <StatCard
          title="Hire Requests"
          value={
            stats.hires
          }
        />

        <StatCard
          title="Suggestions"
          value={
            stats.suggestions
          }
        />

        <StatCard
          title="Activities"
          value={
            stats.activities
          }
        />
      </div>
    </div>
  );
}