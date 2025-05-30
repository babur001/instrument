import cn from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  Percent,
  Sparkle,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";

function ProductSelect() {
  const [filter, setFilter] = useState("new");

  const types = [
    {
      slug: "popular",
      title: "Популярные",
      icon: <TrendingUp strokeWidth={2} />,
    },

    {
      slug: "new",
      title: "Новинки",
      icon: <Sparkle strokeWidth={2} />,
    },

    {
      slug: "sale",
      title: "В скидке",
      icon: <Percent strokeWidth={2} />,
    },

    {
      slug: "cheap",
      title: "Дешевле",
      icon: <ArrowDown strokeWidth={2} />,
    },

    {
      slug: "expensive",
      title: "Дороже",
      icon: <ArrowUp strokeWidth={2} />,
    },
  ];

  return (
    <section className="pt-7 | flex flex-wrap gap-2">
      {types.map((type, index) => {
        const isActive = filter === type.slug;

        return (
          <Button
            key={index}
            onClick={() => setFilter(type.slug)}
            variant={isActive ? "default" : "secondary"}
            className={cn({
              "bg-[#EFF9FF] text-primary rounded-full font-bold min-w-32": true,
              "bg-primary text-white": isActive,
            })}
          >
            {type.icon} {type.title}
          </Button>
        );
      })}
    </section>
  );
}

export default ProductSelect;
