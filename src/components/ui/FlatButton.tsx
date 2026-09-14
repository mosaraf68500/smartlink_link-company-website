import { ReactNode } from "react";

interface FlatButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const FlatButton = ({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: FlatButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2.5
        rounded-lg
        border
        border-[#0000001F]
        bg-transparent
        px-4
        py-2
        body-regular
        text-secondary
        transition-colors
        hover:bg-black/5
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      <span>{children}</span>

      {icon && (
        <span className="flex shrink-0 items-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default FlatButton;


{/* <FlatButton>Learn More</FlatButton>



<FlatButton icon={<ArrowRight size={18} />}>
  Learn More
</FlatButton> */}