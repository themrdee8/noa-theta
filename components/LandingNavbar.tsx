"use client";

import React from "react";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import noaLogo from "@/public/assets/Noa-logo.png";

const font = Ubuntu({
  weight: "500",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="w-8 h-8 mr-4 relative">
          <Image
            fill
            src={noaLogo}
            alt="Noa logo"
            className="bg-white rounded-full"
          />
        </div>
        <h1 className={cn("text-white text-2xl font-bold", font.className)}>
          Noa
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"} >
            <Button className="rounded-2xl" variant="outline" >Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
