import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Vehicle } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateVehicle(vehicle: Partial<Vehicle>) {
  if (!vehicle.make || !vehicle.model || !vehicle.year || !vehicle.value) {
    return false
  }

  if (vehicle.year < 0) {
    return false
  }

  if (vehicle.value < 0) {
    return false
  }

  return true;
}

// create a function to check if any parameter is undefined
export function isUndefined(...args: any[]) {
  return args.some((arg) => arg === undefined);
}