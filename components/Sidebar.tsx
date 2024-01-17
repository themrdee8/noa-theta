"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import noaLogo from "@/public/assets/Noa-logo.png";
import { Instrument_Serif, Montserrat, Salsa, Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code2,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

/* const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
}); */

const ubuntu = Ubuntu({
  weight: "500",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-600",
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-600",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-800",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-600",
  },
  {
    label: "Code Generation",
    icon: Code2,
    href: "/code",
    color: "text-green-400",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
]; 

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#021126] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              src={noaLogo}
              alt="logo"
              fill
              className="bg-white rounded-full"
            />
          </div>
          <h1 className={cn("text-2xl font-semibold", ubuntu.className)}>
            Noa
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-xl transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
