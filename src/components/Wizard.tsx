"use client";

import { useState } from "react";
import { Stepper } from "@/components/Stepper";
import { AboutYourselfForm } from "@/components/forms/AboutYourselfForm";
import { AboutYourselfFormProps, Driver, Vehicle } from "@/lib/types";
import { VehiclesForm } from "@/components/forms/VehiclesForm";
import { DriversForm } from "@/components/forms/DriversForm";

type Form = {
  aboutYourself?: AboutYourselfFormProps;
  vehicles?: Vehicle[];
  drivers?: Driver[];
};

export const Wizard = ({}) => {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<Form>({});

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

  return (
    <div className="flex flex-col mx-auto w-2/4 gap-12">
      <Stepper steps={4} currentStep={step} />
      {step === 0 && <AboutYourselfForm onContinue={handleAboutYourself} />}
      {step === 1 && <VehiclesForm onContinue={handleVehicles} />}
      {step === 2 && <DriversForm onContinue={handleDrivers} />}
    </div>
  );
};
