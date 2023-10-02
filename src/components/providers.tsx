"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/components/theme-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}