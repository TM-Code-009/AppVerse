import {
  useEffect,
  useState,
} from "react";

import {
  FaRocket,
  FaStar,
  FaBriefcase,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

import StatCard from "../components/StatsCard";

import {
  getStats,
} from "../../services/dashboard.service";

import {
  getActivities,
} from "../../services/activity.service";

export default function Dashboard() {
  const [stats,
    setStats] =
    useState<any>(null);

  const [activities,
    setActivities] =
    useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData =
    async () => {
      try {
        const statsData =
          await getStats();

        const activityData =
          await getActivities();

        setStats(
          statsData
        );

        setActivities(
          activityData
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (!stats) {
    return (
      <div className="p-8">
        Loading Dashboard...
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
          Dashboard
        </h1>

        <p
          className="
          text-gray-400
          mt-2
        "
        >
          Welcome back to
          AppVerse CMS
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-5
        gap-5
      "
      >
        <StatCard
          title="Apps"
          value={
            stats.totalApps
          }
          icon={<FaRocket />}
        />

        <StatCard
          title="Featured"
          value={
            stats.featuredApps
          }
          icon={<FaStar />}
        />

        <StatCard
          title="Hire Requests"
          value={
            stats.hires
          }
          icon={
            <FaBriefcase />
          }
        />

        <StatCard
          title="Suggestions"
          value={
            stats.suggestions
          }
          icon={
            <FaLightbulb />
          }
        />

        <StatCard
          title="Activities"
          value={
            stats.activities
          }
          icon={
            <FaChartLine />
          }
        />
      </div>

      <div
        className="
        grid
        lg:grid-cols-3
        gap-6
      "
      >
        <div
          className="
          lg:col-span-2
          bg-[#111827]
          border
          border-white/10
          rounded-3xl
          p-6
        "
        >
          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Recent Activities
          </h2>

          <div className="space-y-4">
            {activities
              .slice(0, 10)
              .map(
                (
                  activity
                ) => (
                  <div
                    key={
                      activity._id
                    }
                    className="
                    p-4
                    rounded-xl
                    bg-black/20
                    border
                    border-white/5
                  "
                  >
                    <p>
                      {
                        activity.message
                      }
                    </p>

                    <span
                      className="
                      text-xs
                      text-gray-400
                    "
                    >
                      {new Date(
                        activity.createdAt
                      ).toLocaleString()}
                    </span>
                  </div>
                )
              )}
          </div>
        </div>

        <div
          className="
          bg-[#111827]
          border
          border-white/10
          rounded-3xl
          p-6
        "
        >
          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Quick Actions
          </h2>

          <div className="space-y-4">
            <a
              href="/admin/add-app"
              className="
              block
              p-4
              rounded-xl
              bg-green-500
              text-center
              font-semibold
            "
            >
              Add New App
            </a>

            <a
              href="/admin/apps"
              className="
              block
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              text-center
            "
            >
              Manage Apps
            </a>

            <a
              href="/admin/hire"
              className="
              block
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              text-center
            "
            >
              View Hire Requests
            </a>

            <a
              href="/admin/suggestions"
              className="
              block
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              text-center
            "
            >
              View Suggestions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}