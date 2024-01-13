"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code2,
  Image,
  MessagesSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Coversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-800/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-600",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Music",
    icon: Music,
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code2,
    color: "text-green-500",
    bgColor: "bg-green-600/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Explore the power of Noa
        </h2>
        <p className="text-muted-foreground font-light text-sm text-center md:text-[15px]">
          Chat with the smartest AI - Exprerience the power of Noa
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md cursor-pointer transition ease-in"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-lg ", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
