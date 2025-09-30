import React from "react";

interface ProfileBlobProps {
  imageSrc: string;
  alt?: string;
  size?: string; // optional Tailwind width/height class, e.g., "w-32 h-32"
  bgColor?: string; // background blob color
}

export const ProfileBlob: React.FC<ProfileBlobProps> = ({
  imageSrc,
  alt = "Profile",
  size = "w-32 h-32",
  bgColor = "bg-purple-600",
}) => {
  return (
    <div
      className={`relative ${size} rounded-full ${bgColor} flex items-center justify-center overflow-hidden`}
      style={{
        clipPath:
          "path('M80,0 C120,0 160,40 160,80 C160,120 120,160 80,160 C40,160 0,120 0,80 C0,40 40,0 80,0 Z')",
      }}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
