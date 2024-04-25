import { CardVariant, Vehicle } from "@/lib/types";
import { CarIcon } from "./icons/Car";
import { DetailsCard } from "./DetailsCard";

export const VehicleCard = ({
  vehicle,
  variant = "primary",
  onClick,
}: {
  vehicle: Vehicle;
  variant?: CardVariant;
  onClick?: () => void;
}) => {
  return (
    <DetailsCard
      variant={variant}
      title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
      subtitle={variant === "primary" ? `$${vehicle.value}` : undefined}
      icon={<CarIcon />}
      onClick={onClick}
    />
  );
};
