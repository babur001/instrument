import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export const Button = ({
  leftIcon,
  rightIcon,
  children,
  ...rest
}: {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="text-sm hover:text-primary gap-2 cursor-pointer flex items-center active:scale-95 duration-150 hover:bg-[#EFF9FF] | px-2 h-9 | rounded-def"
    >
      {leftIcon} {children} {rightIcon}
    </button>
  );
};

export function Nav() {
  return (
    <nav className="flex items-center justify-center gap-3 | relative">
      <Link href="#">
        <Button leftIcon={<User strokeWidth={1} className="h-5" />}>Войти</Button>
      </Link>

      <Link href="#">
        <Button leftIcon={<Heart strokeWidth={1} className="h-5" />}>Избранное</Button>
      </Link>

      <Link href="#">
        <Button leftIcon={<ShoppingBag strokeWidth={1} className="h-5" />}>Корзина</Button>
      </Link>
    </nav>
  );
}
