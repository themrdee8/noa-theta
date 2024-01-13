import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileMenu />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
