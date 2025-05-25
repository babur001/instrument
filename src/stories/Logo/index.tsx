import Link from "next/link";
import SvgLogo from "@/stories/Logo/SvgLogo";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <SvgLogo className="h-9 pr-3" />
        <h1 className="text-2xl font-extrabold text-[#30A8F7]">instrument.</h1>
      </div>
    </Link>
  );
}

export default Logo;
