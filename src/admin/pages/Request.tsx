import {
  useEffect,
  useState,
} from "react";

import api from "../../services/api";

interface Request {
  _id: string;
  appTitle: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  notes: string;
  status: string;
  createdAt: string;
}

export default function Requests() {
  const [requests,
    setRequests] =
    useState<Request[]>([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests =
    async () => {
      try {
        const res =
          await api.get(
            "/requests"
          );

        setRequests(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="p-6">
        Loading requests...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="
          text-4xl
          font-black
        "
        >
          App Requests
        </h1>

        <p
          className="
          text-gray-400
          mt-2
        "
        >
          Leads generated from
          your marketplace
        </p>
      </div>

      <div
        className="
        bg-[#111827]
        border
        border-white/10
        rounded-3xl
        overflow-hidden
      "
      >
        <div className="overflow-x-auto">
          <table
            className="
            w-full
          "
          >
            <thead
              className="
              bg-black/20
            "
            >
              <tr>
                <th className="p-4 text-left">
                  App
                </th>

                <th className="p-4 text-left">
                  Client
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {requests.length ===
              0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="
                    p-8
                    text-center
                    text-gray-400
                  "
                  >
                    No requests found
                  </td>
                </tr>
              ) : (
                requests.map(
                  (
                    request
                  ) => (
                    <tr
                      key={
                        request._id
                      }
                      className="
                      border-t
                      border-white/10
                    "
                    >
                      <td className="p-4">
                        {
                          request.appTitle
                        }
                      </td>

                      <td className="p-4">
                        {
                          request.name
                        }
                      </td>

                      <td className="p-4">
                        {
                          request.email
                        }
                      </td>

                      <td className="p-4">
                        {
                          request.phone
                        }
                      </td>

                      <td className="p-4">
                        <span
                          className="
                          px-3
                          py-1
                          rounded-full
                          bg-yellow-500/20
                          text-yellow-400
                          text-sm
                        "
                        >
                          {
                            request.status
                          }
                        </span>
                      </td>

                      <td className="p-4">
                        {new Date(
                          request.createdAt
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}