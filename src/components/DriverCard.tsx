import { CardVariant, Driver } from "@/lib/types";
import { DetailsCard } from "./DetailsCard";
import { UserIcon } from "./icons/User";

export const DriverCard = ({
  driver,
  variant,
  onClick,
}: {
  driver: Driver;
  variant?: CardVariant;
  onClick?: () => void;
}) => {
  return (
    <DetailsCard
      variant={variant}
      title={`${driver.firstName} ${driver.lastName}`}
      subtitle={variant === "primary" ? driver.licenseNumber : undefined}
      icon={<UserIcon />}
      onClick={onClick}
    />
  );
};
