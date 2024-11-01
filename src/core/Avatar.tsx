import { cn } from "@/lib/utils";
import { useState } from "react";

type AvatarProps = {
    src?: string;
    name: string;
    className?: string
};

const Avatar = ({ name, src, className }: AvatarProps) => {
    const [imageExists, setImageExists] = useState(true);

    const handleImageError = () => {
        setImageExists(false);
    };

    return (
        <>
            {imageExists && src ? (
                <img
                    src={src}
                    alt={name}
                    className="rounded-full w-12 h-12 object-cover object-center"
                    onError={handleImageError}
                    loading="lazy"  // Añadir lazy loading
                    decoding="async"
                />
            ) : (
                <span className={cn("text-sm font-medium bg-gray-300 rounded-full flex items-center justify-center w-12 h-12", className)}>
                    {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </span>
            )}
        </>
    );
};

export default Avatar;
