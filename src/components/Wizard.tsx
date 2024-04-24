"use client";

import { useState } from "react";
import { Stepper } from "@/components/Stepper";
import { AboutYourselfForm } from "@/components/forms/AboutYourselfForm";
import {
  AboutYourselfFormProps,
} from "@/lib/types";

type Form = {
  aboutYourself?: AboutYourselfFormProps;
};

export const Wizard = ({}) => {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<Form>({});

  const handleAboutYourself = (data: AboutYourselfFormProps) => {
    setForm({ ...form, aboutYourself: data });
    setStep(1);
  };

  return (
    <div className="flex flex-col mx-auto w-2/4 gap-12">
          <Stepper steps={4} currentStep={step} />
          {step === 0 && <AboutYourselfForm onContinue={handleAboutYourself} />}
    </div>
  );
};
