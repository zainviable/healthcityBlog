import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // const config = useMemo(
    //     {
    //         readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    //         placeholder: 'Start typings...'
    //     },
    //     []
    // );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            // config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => console.log(newContent)}
        />
    )
}

export default Editor