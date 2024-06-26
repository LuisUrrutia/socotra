"use client";

import { useState } from "react";
import { Stepper } from "@/components/Stepper";
import { AboutYourselfForm } from "@/components/forms/AboutYourselfForm";
import {
  AboutYourselfFormProps,
  Driver,
  DriversRecordsFormProps,
  Vehicle,
} from "@/lib/types";
import { VehiclesForm } from "@/components/forms/VehiclesForm";
import { DriversForm } from "@/components/forms/DriversForm";
import { DriversRecordsForm } from "@/components/forms/DriversRecordsForm";
import { calculateInsuranceCost } from "@/lib/insurance";
import { InsuranceSummary } from "@/components/InsuranceSummary";

type Form = {
  aboutYourself?: AboutYourselfFormProps;
  vehicles?: Vehicle[];
  drivers?: Driver[];
  driversRecords?: DriversRecordsFormProps;
};

export const Wizard = ({}) => {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<Form>({});
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  const handleAboutYourself = (data: AboutYourselfFormProps) => {
    setForm({ ...form, aboutYourself: data });
    setStep(1);
  };

  const handleVehicles = (data: Vehicle[]) => {
    setForm({ ...form, vehicles: data });
    setStep(2);
  };

  const handleDrivers = (data: Driver[]) => {
    setForm({ ...form, drivers: data });
    setStep(3);
  };

  const handleDriversRecords = (data: DriversRecordsFormProps) => {
    setForm(() => {
      const insuranceCost = calculateInsuranceCost(
        form.vehicles!,
        form.drivers!,
        data,
      );

      setInsuranceCost(insuranceCost);

      return { ...form, driversRecords: data };
    });
    setHasFinished(true);
  };

  return (
    <div className="flex flex-col mx-auto w-2/4 gap-12">
      {!hasFinished ? (
        <>
          <Stepper steps={4} currentStep={step} />
          {step === 0 && <AboutYourselfForm onContinue={handleAboutYourself} />}
          {step === 1 && <VehiclesForm onContinue={handleVehicles} />}
          {step === 2 && <DriversForm onContinue={handleDrivers} />}
          {step === 3 && (
            <DriversRecordsForm onContinue={handleDriversRecords} />
          )}
        </>
      ) : (
        <InsuranceSummary
          insuranceCost={insuranceCost}
          vehicles={form.vehicles!}
          drivers={form.drivers!}
        />
      )}
    </div>
  );
};
