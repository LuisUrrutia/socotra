"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerInput } from "@/components/ui/datepicker";
import { BaseForm } from "@/components/forms/BaseForm";
import { AboutYourselfFormProps } from "@/lib/types";

export const AboutYourselfForm = ({
  onContinue,
}: {
  onContinue?: (props: AboutYourselfFormProps) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<Date | undefined>(undefined);

  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    setValid(!!(name && birth));
  }, [name, birth]);

  return (
    <BaseForm
      title="Tell us about yourself"
      button={{
        disabled: !valid,
      }}
      onSubmit={() => {
        if (!valid) return;
        
        onContinue?.({ name, birth: birth! });
      }}
    >
      <>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="birth">Date of Birth</Label>
          <DatePickerInput id="birth" date={birth} onPick={setBirth} />
        </div>
      </>
    </BaseForm>
  );
};
