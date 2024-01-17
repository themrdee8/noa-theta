"use client";

import { useEffect, useState } from "react";
import { ProVersion } from "@/components/ProVersion";

export const VersionProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProVersion />
    </>
  );
};
