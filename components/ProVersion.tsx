"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckSquare,
  Code2,
  Image,
  MessagesSquare,
  Music,
  Video,
  Zap,
} from "lucide-react";
import { useProVersion } from "@/hooks/UseProVersion";
import { Badge } from "@/components/ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const tools = [
  {
    label: "Coversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-800/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-600",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music",
    icon: Music,
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
  },
  {
    label: "Code Generation",
    icon: Code2,
    color: "text-green-500",
    bgColor: "bg-green-600/10",
  },
];

export const ProVersion = () => {
  const proVersion = useProVersion();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proVersion.isOpen} onOpenChange={proVersion.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2 flex items-center justify-center flex-col gap-y-2">
            <div className="flex items-center py-1 gap-x-2 font-semibold">
              Upgrade To Noa
              <Badge className="py-1 uppercase text-sm" variant="premium">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex justify-between items-center p-3 border-black/5"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6, h-6", tool.color)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <CheckSquare className="w-5 h-5 text-primary" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            className="w-full"
            variant="premium"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
