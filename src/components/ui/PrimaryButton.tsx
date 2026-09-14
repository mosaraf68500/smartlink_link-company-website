import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center cursor-pointer
        gap-3
        rounded-[6px]
        bg-primary
        px-8
        py-3
        font-["Plus_Jakarta_Sans"]
        text-[18px]
        font-medium
        leading-[160%]
        tracking-[0]
        text-white
        transition-opacity
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      <span>{children}</span>

      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
    </button>
  );
};

export default PrimaryButton;

{
  /* <PrimaryButton>
  Schedule a Call
</PrimaryButton>



<PrimaryButton icon={<ArrowRight size={20} />}>
  Schedule a Call
</PrimaryButton> */
}
