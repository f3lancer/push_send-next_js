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
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Devices</h1>
      <p className="mb-2 text-gray-600">Total: {total}</p>
      <div className="overflow-x-auto min-width: 340px;">
        <DevicesToolbar onFilter={handleFilter} />
        <div className="w-full bg-white rounded-xl shadow">
          <div
            className=" 
            bg-gray-100 px-4 py-2 font-semibold  
           hidden sm:grid grid-cols-[4%_12%_18%_auto_20%] gap-2 items-center"
          >
            <div>#</div>
            <div>Platform</div>
            <div>User ID</div>
            <div>Email</div>
            <div className="text-center">Actions</div>
          </div>
          {devices.map((d, idx) => (
            <div
              key={d._id}
              className="
              pl-2 py-2
              gap-y-4
              w-full
              grid grid-cols-[5%_64%_25%]                
              sm:grid-cols-[4%_12%_18%_auto_20%] items-center gap-2 
            "
            >
              <div>{offset + idx + 1}</div>
              <div>{d.platform}</div>
              <div>{d.user_id}</div>
              <div className="col-start-1 col-span-2 sm:col-span-1">
                {d.email}
              </div>
              <Link href={`/devices/${d._id}`}>
                <Button disabled={false} variant="secondary">
                  Info
                </Button>
              </Link>
            </div>
          ))}
        </div>
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
