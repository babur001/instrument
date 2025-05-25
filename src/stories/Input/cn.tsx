import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(props: typeof clsx.arguments): string {
  return twMerge(clsx(...props));
}
