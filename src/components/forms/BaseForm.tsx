import { Button } from "@/components/ui/button";

type ButtonProps = {
  hide?: boolean;
  disabled?: boolean;
}

export const BaseForm = ({
  title,
  children,
  button,
  onSubmit,
}: {
  title: string;
  children: React.ReactNode;
  button?: ButtonProps;
  onSubmit?: () => void;
}) => {

  return (
    <div className="flex flex-col items-center gap-y-12">
      <h2 className="text-3xl font-semibold">{title}</h2>

      <div className="grid gap-y-5 w-full">{children}</div>

      {button?.hide ? null : (
        <div className="flex w-full justify-end">
          <Button disabled={button?.disabled} onClick={onSubmit}>Continue</Button>
        </div>
      )}
    </div>
  );
};
