"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { BaseForm } from "@/components/forms/BaseForm";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { isUndefined, validateDriver } from "@/lib/utils";
import { Driver, DriverFormProps } from "@/lib/types";
import { Form } from "./form";
import { DriverCard } from "@/components/DriverCard";

export const DriversForm = ({
  onContinue,
}: {
  onContinue?: (props: Driver[]) => void;
}) => {
  const [currentDriver, setCurrentDriver] = useState<
    DriverFormProps | undefined
  >(undefined);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [valid, setValid] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | undefined>(undefined);

  const handleCurrentDriver = (data: DriverFormProps) => {
    setCurrentDriver(data);
    setValid(validateDriver(data));
  };

  const handleAddOrEditDriver = () => {
    if (
      !currentDriver ||
      isUndefined(
        currentDriver.firstName,
        currentDriver.lastName,
        currentDriver.licenseNumber,
      )
    ) {
      return;
    }

    const cDriver = currentDriver as Required<DriverFormProps>;

    if (editingId === undefined) {
      setDrivers([
        ...drivers,
        {
          ...cDriver,
          id: uuid(),
        },
      ]);
    } else {
      const newDrivers = drivers.map((driver) => {
        if (driver.id === editingId) {
          return {
            ...cDriver,
            id: editingId,
          };
        }

        return driver;
      });

      setDrivers(newDrivers);
    }

    resetDriverInformation();
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    resetDriverInformation();
  };

  const handleOpenChange = (status: boolean) => {
    setOpen(status);
    if (!status) {
      resetDriverInformation();
    }
  };

  const resetDriverInformation = () => {
    setCurrentDriver(undefined);
    setValid(false);
  };

  return (
    <div>
      <BaseForm
        title="Tell us about the driver(s)"
        button={{
          hide: drivers.length === 0,
        }}
        onSubmit={() => onContinue?.(drivers)}
      >
        <div className="w-full flex flex-col items-center gap-y-12">
          <div className="grid gap-y-4 w-full">
            {drivers.map((driver) => (
              <DriverCard
                key={driver.id}
                driver={driver}
                onClick={() => {
                  setCurrentDriver(() => {
                    setEditingId(driver.id);
                    setOpen(true);
                    setValid(validateDriver(driver));

                    return driver;
                  });
                }}
              />
            ))}
          </div>

          <Button
            variant={drivers.length > 0 ? "ghost" : "default"}
            className="gap-x-2"
            onClick={() => setOpen(true)}
          >
            <PlusIcon />
            Add driver
          </Button>
        </div>
      </BaseForm>

      <Sidebar open={open} onOpenChange={handleOpenChange} direction="right">
        <SidebarContent withFooter>
          <SidebarHeader
            title={editingId !== undefined ? "Edit Driver" : "Add Driver"}
          />

          <Form
            value={currentDriver}
            onChange={(data) => handleCurrentDriver(data)}
          />
          <SidebarFooter
            action={{
              text: "Confirm",
              disabled: !valid,
            }}
            onCancel={handleCancel}
            onAction={handleAddOrEditDriver}
          />
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
