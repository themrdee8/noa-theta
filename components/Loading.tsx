import Image from "next/image"
import logo from "@/public/assets/Noa-logo.png"

export const Loading = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center">
            <div className="w-10 h-10 animate-spin relative">
                <Image src={logo} alt="logo" fill />
            </div>
            <p className="text-sm text-muted-foreground">
                Noa is thinking...
            </p>
        </div>
    )
}