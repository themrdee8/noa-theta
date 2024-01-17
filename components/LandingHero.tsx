"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LandingHero = () => {
  const isSignedIn = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold space-y-5">
        <h1>The Best AI Tool For</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          <TypewriterComponent
            options={{
              strings: [
                "Conversations.",
                "Code Generation.",
                "Video Generation.",
                "Music Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content 10x faster with Noa.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 font-semibold rounded-full"
          >
            Start Generating for free
          </Button>
        </Link>
      </div>
      <div className="text-xs md:text-sm font-normal text-zinc-400">
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;
