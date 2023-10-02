"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { SidebarNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const segment = useSelectedLayoutSegment();

  if (!items?.length) return null;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
      {items.map((item, index) => {
        const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;

        return item.href ? (
          <Link
            aria-label={item.title}
            key={index}
            href={item.href}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                item.href.includes(String(segment))
                  ? "bg-accent font-medium"
                  : "transparent",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{item.title}</span>
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
}
