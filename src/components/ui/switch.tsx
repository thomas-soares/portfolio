"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        disabled={disabled}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-glow) focus-visible:ring-offset-2 focus-visible:ring-offset-(--background) disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-(--primary) data-[state=unchecked]:bg-(--surface-elevated)",
          className,
        )}
        onClick={(event) => {
          props.onClick?.(event);
          if (!event.defaultPrevented) {
            onCheckedChange?.(!checked);
          }
        }}
        {...props}
      >
        <span
          data-state={checked ? "checked" : "unchecked"}
          className="pointer-events-none block size-5 rounded-full bg-(--highlight) shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";
