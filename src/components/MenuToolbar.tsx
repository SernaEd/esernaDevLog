import React from "react";

interface ParentProps {
    children?: React.ReactNode;
}

export const MenuToolbar: React.FC<ParentProps> = ({children}) => {
    return <div>
        {children}
    </div>
}