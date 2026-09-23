"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
      <Link
        href="/"
        className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-[#c1227d]" />
          {item.href ? (
            <Link href={item.href} className="text-white/40 hover:text-white transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-white/80 max-w-[220px] md:max-w-none truncate">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
