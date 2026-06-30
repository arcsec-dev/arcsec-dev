import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 44 }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center transition-opacity hover:opacity-80", className)}
    >
      <Image
        src="/logo.png"
        alt="VibeSec"
        width={Math.round(height * 2.5)}
        height={height}
        className="h-[44px] w-auto object-contain"
        priority
      />
    </Link>
  );
}
