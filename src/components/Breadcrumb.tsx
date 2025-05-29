import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface IBreadCrumbProps {
  links: {
    title: string;
    href?: string;
  }[];
}

function Breadcrumb({ links }: IBreadCrumbProps) {
  return (
    <div className="pt-7 flex items-center">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        return (
          <>
            <div key={index} className="flex items-center">
              <Link
                href={link.href || "#"}
                className={cn({
                  "hover:text-[#30A8F7] duration-200 text-[#001A34] text-sm":
                    true,
                  "text-[#30A8F7] pointer-events-none cursor-default": isLast,
                })}
              >
                {link.title}
              </Link>
            </div>

            {isLast ? null : (
              <ChevronRight className="size-5 mx-2" strokeWidth={1.25} />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
