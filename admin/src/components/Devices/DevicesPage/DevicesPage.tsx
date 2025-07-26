"use client";
import Link from "next/link";
import { Button } from "inputs-and-buttons";
import type { Device } from "push-api-client/src/types";
import { useRouter, useSearchParams } from "next/navigation";
import DevicesToolbar from "@/components/Devices/DevicesToolbar/DevicesToolbar";

type DevicesPageProps = {
  devices: Device[];
  total: number;
  offset: number;
};

function getPagination(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [];
  if (current > 3) pages.push(1);
  if (current > 4) pages.push("...");
  for (
    let i = Math.max(1, current - 1);
    i <= Math.min(total, current + 1);
    i++
  ) {
    pages.push(i);
  }
  if (current < total - 3) pages.push("...");
  if (current < total - 2) pages.push(total);
  return pages;
}

function getPaginationLinkParams(searchParams, page) {
  const params = new URLSearchParams(searchParams.toString());
  params.set("page", page);
  return params.toString();
}

const DevicesPage: React.FC<DevicesPageProps> = ({
  devices,
  total,
  offset,
}) => {
  const perPage =
    devices.length > 0
      ? Math.max(1, Math.round(total / Math.ceil(total / devices.length)))
      : 1;

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Math.floor((offset ?? 0) / perPage) + 1;
  const pagesCount = Math.ceil(total / perPage);
  const pagination = getPagination(currentPage, pagesCount);

  const handleFilter = (filters) => {
    const params = new URLSearchParams(searchParams.toString());
    if (filters.email) params.set("email", filters.email);
    else params.delete("email");
    if (filters.userId) params.set("user_id", filters.userId);
    else params.delete("user_id");
    if (filters.platform) params.set("platform", filters.platform);
    else params.delete("platform");
    if (filters.tags) params.set("tags", filters.tags);
    else params.delete("tags");
    if (filters.deviceToken) params.set("device_token", filters.deviceToken);
    else params.delete("device_token");

    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Devices</h1>
      <p className="mb-2 text-gray-600">Total: {total}</p>
      <div className="overflow-x-auto">
        <DevicesToolbar onFilter={handleFilter} />

        <table className="min-w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Platform</th>
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d, idx) => (
              <tr key={d._id} className="border-t">
                <td className="py-2 px-4">{offset + idx + 1}</td>
                <td className="py-2 px-4">{d.platform}</td>
                <td className="py-2 px-4">{d.user_id}</td>
                <td className="py-2 px-4">{d.email}</td>
                <td className="py-2 px-4 text-right">
                  <Link href={`/devices/${d._id}`}>
                    <Button disabled={false} variant="secondary">
                      Info
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagesCount > 1 && (
        <div className="flex items-center gap-2 mt-6 justify-center">
          {pagination.map((p, idx) =>
            p === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-gray-400 select-none"
              >
                ...
              </span>
            ) : (
              <Link
                key={`page-${p}`}
                href={`?${getPaginationLinkParams(searchParams, p)}`}
                className={`px-3 py-1 rounded-lg border transition ${
                  p === currentPage
                    ? "bg-blue-600 text-white border-blue-600 font-bold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {p}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default DevicesPage;
