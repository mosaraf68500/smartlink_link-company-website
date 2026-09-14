interface StartingPriceLineProps {
  text: string;
  className?: string;
}

const StartingPriceLine = ({ text, className = "" }: StartingPriceLineProps) => {
  return (
    <p
      className={`font-jakarta text-base font-medium text-primary sm:text-lg ${className}`}
    >
      {text}
    </p>
  );
};

export default StartingPriceLine;
