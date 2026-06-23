import { cn } from "@/lib/utils";
import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  children: ReactNode;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-accent text-accent-fg hover:opacity-90",
    outline:
      "border border-hairline-strong bg-transparent text-ink hover:border-ink-3",
    ghost: "text-ink-2 hover:text-ink hover:bg-surface-raised",
    secondary:
      "bg-surface-raised text-ink border border-hairline hover:border-hairline-strong",
  };

  const sizes = {
    default: "h-9 px-3.5 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-11 px-5 text-sm",
    icon: "size-9",
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className,
        (children as { props?: { className?: string } }).props?.className,
      ),
      ...props,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
