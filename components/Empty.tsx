import Image from "next/image";
import empty from "@/public/assets/empty.png";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="h-72 w-72 relative">
        <Image src={empty} alt="thinking man" fill />
      </div>
      <p className="text-muted-foreground text-sm text-center pt-2">
        {label}
      </p>
    </div>
  );
};
