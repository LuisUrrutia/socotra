import { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export const Header = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <header className={cn('flex h-40 bg-gradient-to-br from-primary-darker to-primary', className)}>
            <div className="flex justify-center items-center">
                <Logo />
            </div>
            <div className="flex justify-center items-center w-full">
                {children}
            </div>
        </header>
    );
}