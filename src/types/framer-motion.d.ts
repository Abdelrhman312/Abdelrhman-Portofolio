declare module "framer-motion" {
  import type { ComponentType, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
  type MotionDivProps = HTMLAttributes<HTMLDivElement> & {
    initial?: unknown;
    whileInView?: unknown;
    animate?: unknown;
    exit?: unknown;
    viewport?: unknown;
    transition?: unknown;
    onMouseDown?: MouseEventHandler<HTMLDivElement>;
  };
  export const motion: { div: ComponentType<MotionDivProps> };
  export const AnimatePresence: ComponentType<{ children?: ReactNode; mode?: "sync" | "wait" | "popLayout" }>;
  export function useReducedMotion(): boolean | null;
}
