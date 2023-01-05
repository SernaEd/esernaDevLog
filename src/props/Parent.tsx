import {Child, ChildAsFC} from './Child';
import React from "react";

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        jhvbhjbvj
    </ChildAsFC>;
};

export default Parent;