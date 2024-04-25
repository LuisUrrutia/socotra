"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { BaseForm } from "@/components/forms/BaseForm";
import { DriversRecordsFormProps } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DriversRecordsForm = ({
  onContinue,
}: {
  onContinue?: (props: DriversRecordsFormProps) => void;
}) => {
  const [accidents, setAccidents] = useState<boolean | undefined>(undefined);
  const [convictions, setConvictions] = useState<boolean | undefined>(
    undefined,
  );
  const [suspensions, setSuspensions] = useState<boolean | undefined>(
    undefined,
  );

  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    setValid(
      !(
        accidents === undefined ||
        convictions === undefined ||
        suspensions === undefined
      ),
    );
  }, [accidents, convictions, suspensions]);

  return (
    <BaseForm
      title="Tell us about the drivers` record"
      button={{
        disabled: !valid,
      }}
      onSubmit={() => {
        if (!valid) return;

        onContinue?.({
          accidents: !!accidents,
          convictions: !!convictions,
          suspensions: !!suspensions,
        });
      }}
    >
      <>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="accidents">
            Has any driver had any at-fault accidents in the past 6 years? 
          </Label>
          <Select
            name="accidents"
            value={accidents?.toString()}
            onValueChange={(value) => setAccidents(value === "true")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="convictions">
            Has any driver had any minor or major convictions in the past 6
            years? 
          </Label>
          <Select
            name="convictions"
            value={convictions?.toString()}
            onValueChange={(value) => setConvictions(value === "true")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="suspensions">
            Has any driver had any minor or major convictions in the past 6
            years? 
          </Label>
          <Select
            name="suspensions"
            value={suspensions?.toString()}
            onValueChange={(value) => setSuspensions(value === "true")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </>
    </BaseForm>
  );
};
