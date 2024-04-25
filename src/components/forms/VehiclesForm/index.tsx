"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { PlusIcon } from "@radix-ui/react-icons";
import { BaseForm } from "@/components/forms/BaseForm";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { VehicleCard } from "@/components/VehicleCard";
import { isUndefined, validateVehicle } from "@/lib/utils";
import { Vehicle, VehicleFormProps } from "@/lib/types";
import { Form } from "./form";

export const VehiclesForm = ({
  onContinue,
}: {
  onContinue?: (props: Vehicle[]) => void;
}) => {
  const [currentVehicle, setCurrentVehicle] = useState<
    VehicleFormProps | undefined
  >(undefined);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [valid, setValid] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | undefined>(undefined);

  const handleCurrentVehicle = (data: VehicleFormProps) => {
    setCurrentVehicle(data);
    setValid(validateVehicle(data));
  };

  const handleAddOrEditVehicle = () => {
    if (
      !currentVehicle ||
      isUndefined(
        currentVehicle.make,
        currentVehicle.model,
        currentVehicle.year,
        currentVehicle.value,
      )
    ) {
      return;
    }

    const cVehicle = currentVehicle as Required<VehicleFormProps>;

    if (editingId === undefined) {
      setVehicles([
        ...vehicles,
        {
          ...cVehicle,
          id: uuid(),
        },
      ]);
    }

    if (editingId !== undefined) {
      const newVehicles = vehicles.map((vehicle) => {
        if (vehicle.id === editingId) {
          return {
            ...cVehicle,
            id: editingId,
          };
        }

        return vehicle;
      });

      setVehicles(newVehicles);
    }

    resetVehicleInformation();
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    resetVehicleInformation();
  };

  const handleOpenChange = (status: boolean) => {
    setOpen(status);
    if (!status) {
      resetVehicleInformation();
    }
  };

  const resetVehicleInformation = () => {
    setCurrentVehicle(undefined);
    setValid(false);
  };

  return (
    <div>
      <BaseForm
        title="Tell us about your vehicle(s)"
        button={{
          hide: vehicles.length === 0,
        }}
        onSubmit={() => onContinue?.(vehicles)}
      >
        <div className="w-full flex flex-col items-center gap-y-12">
          <div className="grid gap-y-4 w-full">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onClick={() => {
                  setCurrentVehicle(() => {
                    setEditingId(vehicle.id);
                    setOpen(true);
                    setValid(validateVehicle(vehicle));

                    return vehicle;
                  });
                }}
              />
            ))}
          </div>

          <Button
            variant={vehicles.length > 0 ? "ghost" : "default"}
            className="gap-x-2"
            onClick={() => setOpen(true)}
          >
            <PlusIcon />
            Add vehicle
          </Button>
        </div>
      </BaseForm>

      <Sidebar open={open} onOpenChange={handleOpenChange} direction="right">
        <SidebarContent withFooter>
          <SidebarHeader
            title={editingId !== undefined ? "Edit Vehicle" : "Add Vehicle"}
          />

          <Form
            value={currentVehicle}
            onChange={(data) => handleCurrentVehicle(data)}
          />
          <SidebarFooter
            action={{
              text: "Confirm",
              disabled: !valid,
            }}
            onCancel={handleCancel}
            onAction={handleAddOrEditVehicle}
          />
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
