import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DriverFormProps } from "@/lib/types";
import { ChangeEvent, useEffect, useState } from "react";

export const Form = ({
  value,
  onChange,
}: {
  value?: DriverFormProps;
  onChange?: (data: DriverFormProps) => void;
}) => {
  const [form, setForm] = useState<DriverFormProps>({});

  useEffect(() => {
    setForm({
      firstName: value?.firstName,
      lastName: value?.lastName,
      licenseNumber: value?.licenseNumber,
    });
  }, [value?.firstName, value?.lastName, value?.licenseNumber]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(prevState => {
      const newFormData = {
        ...prevState,
        [name]: value
      };

      onChange?.(newFormData);
      
      return newFormData;
    });
  };

  return (
    <>
      <div className="mx-auto w-10/12 grid gap-y-6 mt-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="licenseNumber">License Number</Label>
          <Input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={form.licenseNumber}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
