
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface Props {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
              <ToastContainer position="top-right" />

      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;