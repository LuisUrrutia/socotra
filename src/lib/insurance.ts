import { BASE_INSURANCE_COST } from "./constants";
import { Driver, DriversRecords, Vehicle } from "./types";

export const calculateInsuranceCost = (
  vehicles: Vehicle[],
  drivers: Driver[],
  driversRecords: DriversRecords
): number => {
  let totalCost = 0;

  // Calculate base cost for all vehicles
  vehicles.forEach((vehicle) => {
    let vehicleBaseCost = BASE_INSURANCE_COST + vehicle.value * 0.01; // 1% of vehicle value
    totalCost += vehicleBaseCost;
  });

  // Adjust cost based on number of vehicles (bulk discount)
  if (vehicles.length > 1) {
    totalCost *= 0.9; // 10% discount for multiple vehicles
  }

  // Increase cost based on number of drivers
  if (drivers.length > 1) {
    totalCost *= 1.05 * drivers.length; // 5% extra per additional driver
  }

  // Increase cost due to negative driving records
  if (driversRecords.accidents) {
    totalCost *= 1.2; // 20% increase for accidents
  }

  if (driversRecords.convictions) {
    totalCost *= 1.15; // 15% increase for convictions
  }

  if (driversRecords.suspensions) {
    totalCost *= 1.25; // 25% increase for suspensions
  }

  // round to two decimals
  return Math.round(totalCost * 100) / 100;
};
