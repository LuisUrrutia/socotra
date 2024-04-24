import { Driver, Vehicle } from "@/lib/types";
import { VehicleCard } from "./VehicleCard";
import { DriverCard } from "./DriverCard";
import { QuoteCard } from "./QuoteCard";

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center w-full">
    <div className="flex flex-col mx-auto w-5/12 gap-4">
      <h1 className="text-xl font-bold text-center">{children}</h1>
      <div className="h-px w-full bg-slate-200"></div>
    </div>
  </div>
);

export const InsuranceSummary = ({
  insuranceCost,
  vehicles,
  drivers,
}: {
  insuranceCost: number;
  vehicles: Vehicle[];
  drivers: Driver[];
}) => {
  return (
    <div className="flex flex-col gap-10">
      <QuoteCard cost={insuranceCost} />

      <Title>Vehicles</Title>
      <div className="flex flex-col gap-5">
        {vehicles.map((vehicle) => (
          <VehicleCard variant="secondary" key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      <Title>Drivers</Title>
      <div className="flex flex-col gap-5">
        {drivers.map((driver) => (
          <DriverCard variant="secondary" key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
};
