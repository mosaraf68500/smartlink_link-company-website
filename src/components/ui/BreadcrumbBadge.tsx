import { ReactNode } from "react";

interface BreadcrumbBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}




const BreadcrumbBadge = ({
  children,
  icon,
  className = "",
}: BreadcrumbBadgeProps) => {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1
        rounded-[61px]
        border
        border-[#FF5A0333]
        bg-white
        px-4
        py-2
        pl-3
        text-[16px]
        font-normal
        leading-[160%]
        tracking-[0]
        text-[#112420]
        ${className}
      `}
    >
      {icon && (
        <span className="flex shrink-0 items-center">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </div>
  );
};

export default BreadcrumbBadge;




{/* <BreadcrumbBadge>
  Service &gt; Digital Marketing
</BreadcrumbBadge>



<BreadcrumbBadge
  icon={<span>⚡</span>}
>
  Service &gt; Digital Marketing
</BreadcrumbBadge> */}