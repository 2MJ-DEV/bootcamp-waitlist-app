import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & ComponentProps<'button'>  

export default function Button({ children, className, ...props }: Props) {
	return (
		<button className={cn('px-4 py-2 bg-primary text-sm text-primary-foreground hover:cursor-pointer hover:opacity-80 transition-all rounded-md', className)} {...props}>{children}</button>
	)
}