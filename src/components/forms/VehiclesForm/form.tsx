import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VehicleFormProps } from "@/lib/types";
import { ChangeEvent, useEffect, useState } from "react";

export const Form = ({
  value,
  onChange,
}: {
  value?: VehicleFormProps;
  onChange?: (data: VehicleFormProps) => void;
}) => {
  const [form, setForm] = useState<VehicleFormProps>({
  });

  useEffect(() => {
    setForm({
      make: value?.make,
      model: value?.model,
      year: value?.year,
      value: value?.value,
    });
  }, [value?.make, value?.model, value?.year, value?.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      const newFormData = {
        ...prevState,
        [name]: value,
      };

      onChange?.(newFormData);

      return newFormData;
    });
  };

  return (
    <>
      <div className="mx-auto w-10/12 grid gap-y-6 mt-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="make">Make</Label>
          <Input
            type="text"
            id="make"
            name="make"
            value={form.make}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="model">Model</Label>
          <Input
            type="text"
            id="model"
            name="model"
            value={form.model}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="year">Year</Label>
          <Input
            type="number"
            id="year"
            name="year"
            min={0}
            max={new Date().getFullYear()}
            value={form.year}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="value">Value</Label>
          <Input
            type="number"
            id="value"
            name="value"
            min={0}
            value={form.value}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
