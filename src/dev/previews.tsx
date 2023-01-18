import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {BookList} from "../components/BookListApp/containers/BookList";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BookList">
                <BookList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;