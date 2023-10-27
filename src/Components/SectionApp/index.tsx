import React, { ReactNode } from "react";

interface SectionAppProps {
  children: ReactNode;
}

export default function SectionApp({ children }: SectionAppProps) {
  return <>{children}</>;
}
