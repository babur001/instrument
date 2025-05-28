"use client";

import { useState } from "react";
import Star from "./Star";
import { MinusIcon, Plus, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProductCard({ product }: { product: any }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex-shrink-0 relative cursor-pointer hover:shadow-200 block h-full shadow-100 rounded-xl overflow-hidden">
      <div className="rounded-[7px] p-2 group duration-300 h-full">
        <div className="w-full block aspect-square rounded-xl overflow-hidden">
          <img src={product.img[0]} alt="2" className="w-full h-full object-cover" />
        </div>

        <div className="px-1 py-2 space-y-2">
          <p className="w-48 text-black text-sm hover:text-[#30A8F7] duration-150">{product.name}</p>

          <div className="flex items-center">
            <Star
              onRate={(e) => {
                console.log(e);
              }}
              star={4}
              rate={3}
              total="12"
            />
          </div>

          <h1 className="font-bold text-base text-[#001A34]">{product.cost.usd}</h1>

          <div className="">
            {false ? (
              <>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <Button className="!rounded-lg" variant="outline" size="icon" onClick={() => setCount(count - 1)} disabled={count === 1}>
                      <MinusIcon className="h-3 w-3" />
                    </Button>

                    <span className="!text-base font-medium">{count}</span>

                    <Button className="!rounded-lg" variant="outline" size="icon" onClick={() => setCount(count + 1)}>
                      <PlusIcon className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <Button variant="outline" className="w-full text-xs rounded-full">
                <Plus strokeWidth={1.5} /> Добавить в корзину
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
