import React from "react";

interface titleProps {
    title: string;
    subtitle: string;
}

export const Title: React.FC<titleProps> = ({title, subtitle}) => {
    return (
        <div className="section-title">
            <h2>{title} <span>{subtitle}</span></h2>
        </div>
    );
}