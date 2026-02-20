import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-3", className)}>
      <ol className="flex items-center flex-wrap gap-1 text-sm font-body">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-neutral-400" />
              )}
              {isLast ? (
                <span className="text-neutral-500">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-secondary hover:text-secondary-dark transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
