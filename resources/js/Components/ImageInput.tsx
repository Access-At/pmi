import React, { useRef } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    image?: File;
}

export default function ImageInput({ image, ...props }: ImageInputProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="w-full">
            <Input
                {...props}
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
            />
            <Button
                onClick={handleButtonClick}
                type="button"
                variant="outline"
                className={cn(
                    "w-full border border-primary text-primary hover:bg-primary hover:text-white"
                )}
            >
                {image ? image.name : "Select Image"}
                {/* Select Image */}
            </Button>
            {/* {image && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500">Preview:</p>
                    <div className="relative w-full">
                        <img
                            src={image}
                            alt="Selected image preview"
                            className="bg-cover w-[13rem] object-cover mx-auto"
                        />
                    </div>
                </div>
            )} */}
        </div>
    );
}
