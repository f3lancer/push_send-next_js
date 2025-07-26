"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "inputs-and-buttons";
import Filter from "@/components/Campaign/Filter/Filter";
import type { Campaign } from "push-api-client/src/types";
import Pagination from "@/components/common/Pagination";

type CampaignsPageProps = {
  companies: Campaign[];
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

function getPaginationLinkParams(searchParams: URLSearchParams, page: number) {
  const params = new URLSearchParams(searchParams.toString());
  params.set("page", String(page));
  return params.toString();
}

export default function CampaignsPage({
  companies,
  total,
  offset,
}: CampaignsPageProps) {
  const perPage =
    companies.length > 0
      ? Math.max(1, Math.round(total / Math.ceil(total / companies.length)))
      : 1;

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Math.floor((offset ?? 0) / perPage) + 1;
  const pagesCount = Math.ceil(total / perPage);
  const pagination = getPagination(currentPage, pagesCount);

  const handleFilter = (tags: string, name: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tags) params.set("tags", tags);
    else params.delete("tags");

    if (name) params.set("name", name);
    else params.delete("name");

    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-4">List Companies</h2>
      <p className="mb-2 text-gray-600">Total: {total}</p>
      <Filter onFilter={handleFilter} />
      <div className="overflow-x-auto">
        <div className="w-full bg-white rounded-xl shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-[50px_1fr_auto] bg-gray-100 px-4 py-2 font-semibold">
            <div>#</div>
            <div>Name</div>
            <div className="text-right">Actions</div>
          </div>

          {companies.map((cmp, idx) => (
            <div
              key={cmp._id}
              className="   py-2 flex flex-col md:grid md:grid-cols-[50px_1fr_auto] md:items-center gap-2"
            >
              <div className="flex justify-start md:hidden">
                <span className="text-gray-500">{offset + idx + 1}</span>
                <span className="font-medium pl-3">{cmp.name ?? cmp._id}</span>
              </div>
              <div className="hidden md:block">{offset + idx + 1}</div>
              <div className="hidden md:block">{cmp.name ?? cmp._id}</div>
              <div className="flex justify-end gap-2 mt-1 md:mt-0">
                <Link
                  href={`/campaigns/${cmp._id}`}
                  className="w-full md:w-auto"
                >
                  <Button disabled={false} variant="secondary">
                    Info
                  </Button>
                </Link>
                <Link
                  href={`/campaigns/${cmp._id}/edit`}
                  className="w-full md:w-auto"
                >
                  <Button disabled={false} variant="secondary">
                    Edit
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={total}
        itemsPerPage={perPage}
      />
    </section>
  );
}
