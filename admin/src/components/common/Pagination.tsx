"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
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

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pagination = getPagination(currentPage, pagesCount);
  const searchParams = useSearchParams();

  if (pagesCount <= 1) return null;

  return (
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
  );
}
