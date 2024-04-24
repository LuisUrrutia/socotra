"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerInput({
  id,
  date,
  placeholder,
  onPick,
}: {
  id: string;
  date: Date | undefined;
  placeholder?: string;
  onPick?: (date: Date) => void;
}) {
  const [internalDate, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (date) setDate(date);
  }, [date]);

  const handlePick = (date: Date | undefined) => {
    if (!date) return;

    setDate(date);
    onPick?.(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={internalDate}
          onSelect={handlePick}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
