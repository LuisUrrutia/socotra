import {
  Drawer,
  DrawerContent as InternalDrawerContent,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export const Sidebar = Drawer;

export const SidebarContent = ({
  children,
  withFooter,
}: {
  children: ReactNode;
  withFooter?: boolean;
}) => {
  return (
    <InternalDrawerContent
      showNotch={false}
      className={`h-screen top-0 right-0 left-auto mt-0 w-[550px] rounded-none`}
    >
      <div className={`h-full w-full relative ${withFooter ? "pb-20" : ""}`}>
        {children}
      </div>
    </InternalDrawerContent>
  );
};

type Action = {
  text: string;
  disabled?: boolean;
};

export const SidebarFooter = ({
  action,
  onCancel,
  onAction,
}: {
  onCancel?: () => void;
  onAction?: () => void;
  action: Action;
}) => {
  return (
    <div className="h-20 w-full absolute bottom-0 left-0 flex items-center justify-center border-t">
      <div className="gap-4 flex justify-end items-center w-10/12 mx-auto">
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onAction} disabled={!!action.disabled}>
          {action.text}
        </Button>
      </div>
    </div>
  );
};

export const SidebarHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-16 border-b">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};
