"use client";

import { cn } from "@/utils/twMerge";

interface BadgeProps {
  title: string;
  className?: string;
  variant: string
}

function badgeVariants(variant: string) {
  switch (variant) {
    case "furniture":
      return "bg-rose-400/40 text-rose-900"
    case "groceries":
      return "bg-yellow-400/40 text-yellow-900"
    case "fragrances":
      return "bg-teal-400/40 text-teal-900"
    case "home-decoration":
      return "bg-blue-400/40 text-blue-900"
    case "beauty":
      return "bg-fuchsia-400/40 text-fuchsia-900"
    default:
      return "bg-zinc-400/40 text-zinc-900"
  }
}

export function Badge({ title, className, variant }: BadgeProps) {
  return (
    <div className={cn("rounded-2xl px-2 py-1 text-sm flex items-center justify-center font-medium", badgeVariants(variant), className)}>
      <p>{title}</p>
    </div>
  )
}
