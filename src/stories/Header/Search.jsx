"use client";

import { useState } from "react";
import cn from "clsx";
import { Search } from "lucide-react";

function Input() {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={cn({
        "focus-within:border-[#30A8F7] h-9 font-normal pr-3 flex items-center justify-center w-full flex-1 | border border-gray-300 duration-300 overflow-hidden rounded-def": true,
      })}
    >
      <input
        type="text"
        onFocus={setFocus}
        onBlur={() => setFocus(false)}
        placeholder="Поиск ваших любимых товаров..."
        spellCheck={false}
        className="pl-3 | w-full outline-none focus:outline-none placeholder-[#C8C8C8] | text-sm text-[#001A34]"
      />
      <Search className="w-5 duration-300" color={`#C8C8C8`} />
    </div>
  );
}

export { Input };
