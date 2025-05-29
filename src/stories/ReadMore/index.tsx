import cn from "clsx";
import { useState } from "react";
import { ReactNode } from "react";

interface ReadMoreProps {
  src?: string;
  children?: ReactNode;
  size?: boolean;
  hide?: boolean;
}

const ReadMore: React.FC<ReadMoreProps> = ({
  hide = false,
  src,
  children,
  size = false,
}) => {
  const [full, setFull] = useState(false);

  if (hide) return children;

  return (
    <section>
      <div
        className={cn({
          "h-[130px] overflow-hidden | relative |  duration-300": true,
          "h-auto": full,
        })}
      >
        <div>{src || children}</div>

        <div
          className={cn({
            "absolute bottom-0 h-12 w-full": true,
            hidden: full,
          })}
          style={{
            background:
              "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)",
          }}
        />
      </div>

      {full ? null : (
        <a
          className={cn({
            "text-[#30A8F7] duration-200 inline-block | cursor-pointer": true,
            hidden: full,
            "text-sm": size,
          })}
          onClick={() => setFull(true)}
        >
          Показать полностью
        </a>
      )}
    </section>
  );
};

export default ReadMore;
