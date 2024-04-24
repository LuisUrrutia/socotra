import { cn } from "@/lib/utils";

export const Stepper = ({
  steps,
  currentStep,
  className,
}: {
  steps: number;
  currentStep: number;
  className?: string;
}) => {
  return (
    <div className={cn(`flex justify-center items-center gap-1`, className)}>
      {Array.from({ length: steps }, (_, i) => (
        <div
          className={cn(
            `flex flex-row items-center gap-1`,
            i !== steps - 1 ? "w-full" : ""
          )}
          key={i}
        >
          <div
            className={cn(
              `w-5 min-w-5 h-5 min-h-5 rounded-full flex justify-center items-center border text-xs`,
              i === currentStep
                ? "bg-stepper-active-background border-stepper-active-border text-stepper-active-foreground"
                : "bg-stepper-background border-stepper-border text-stepper-foreground"
            )}
          >
            {i + 1}
          </div>
          {i !== steps - 1 && (
            <div className="h-px w-full bg-stepper-border"></div>
          )}
        </div>
      ))}
    </div>
  );
};
