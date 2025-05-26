import Logo from "@/stories/Logo";
import Menu from "@/stories/Header/Menu";
import { Input } from "@/stories/Header/Search";
import { Nav } from "@/stories/Header/Nav";

function Header() {
  return (
    <header className="py-4 | z-10 | bg-white shadow-200 w-full | sticky top-0 left-0">
      <div className="flex items-center gap-5 container mx-auto">
        <Logo />
        <Menu />
        <Input />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
