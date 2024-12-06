"use client"
import React, { ReactNode } from "react";

interface FooterProps {
    image?: string;
    alt_image?: string;
    children: ReactNode;
}

export default function Footer(
    {
        image,
        alt_image,
        children,
    }
) {
    return (
        <div className="h-[30rem]">
            <div>
                <img className="h-[10rem]" src={image} alt={alt_image} />
            </div>

            {children}
        </div>
    )

};