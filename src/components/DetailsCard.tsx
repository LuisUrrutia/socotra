import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CardVariant } from "@/lib/types";

export const DetailsCard = ({
  icon,
  title,
  subtitle,
  variant = "primary",
  onClick,
}: {
  title: string;
  subtitle?: string;
  variant?: CardVariant;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      role={onClick !== undefined ? "button" : undefined}
      onClick={onClick}
      className={cn(
        `w-full flex flex-row rounded-lg text-card-foreground px-4 py-5 gap-4 shadow-[0_8px_10px_1px_rgb(0,0,0,0.14)]`,
        variant === "primary" ? "bg-card" : "bg-card-secondary",
        onClick !== undefined
          ? "cursor-pointer transition-transform hover:scale-[1.01]"
          : ""
      )}
    >
      <div className="flex items-center">
        {icon && (
          <div className="border rounded-full w-10 h-10 items-center justify-center flex">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-col w-full justify-center">
        <strong>{title}</strong>
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
};
