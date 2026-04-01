import React from 'react';

export interface ColorModeContextType {
    toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
    toggleColorMode: () => {},
});
