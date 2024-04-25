export type CardVariant = "primary" | "secondary";

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  value: number;
};

export type Driver = {
  id: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
};

export type DriversRecords = {
  accidents: boolean;
  convictions: boolean;
  suspensions: boolean;
};

export type AboutYourselfFormProps = {
  name: string;
  birth: Date;
};

export type VehicleFormProps = Partial<Omit<Vehicle, 'id'>>;
export type DriverFormProps = Partial<Omit<Driver, 'id'>>;