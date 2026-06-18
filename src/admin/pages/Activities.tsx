import {
  useEffect,
  useState,
} from "react";

import ActivityView from "../components/ActivityView";

import {
  getActivities,
} from "../../services/activity.service";

export default function Activities() {
  const [activities,
    setActivities] =
    useState([]);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities =
    async () => {
      try {
        const data =
          await getActivities();

        setActivities(data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <h1
        className="
          text-4xl
          font-black
          mb-8
        "
      >
        Activities
      </h1>

      <ActivityView
        activities={
          activities
        }
      />
    </div>
  );
}