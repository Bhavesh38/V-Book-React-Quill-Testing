import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import "./RichTextEdditor.css";

const RichTextEdditor = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const handleChange = (e) => {
        setContent(e.target.value);
        console.log(content);
    }

    // const config = useMemo(
    //     {
    //         readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    //         placeholder: placeholder || 'Start typings...'
    //     },
    //     [placeholder]
    // );
    return (
        // <div>
        <JoditEditor
            ref={editor}
            value={content}
            // config={config}
            // tabIndex={1} // tabIndex of textarea
            // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={handleChange}
        />
        // </div>
    )
}

export default RichTextEdditor
