import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO, SITE_LOGO_ALT, SITE_NAME } from "@/lib/site-config";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  href?: string;
  className?: string;
  imageClassName?: string;
};

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 52,
} as const;

export default function BrandLogo({
  size = "md",
  showName = true,
  href = "/",
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  const px = sizeMap[size];

  const content = (
    <>
      <Image
        src={SITE_LOGO}
        alt={SITE_LOGO_ALT}
        width={px}
        height={px}
        priority={size !== "sm"}
        className={`rounded-full object-cover ring-2 ring-accent/20 shrink-0 ${imageClassName}`}
      />
      {showName && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Istiak <span className="text-accent">Hossain</span>
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity ${className}`}
      aria-label={`${SITE_NAME} — Home`}
    >
      {content}
    </Link>
  );
}
