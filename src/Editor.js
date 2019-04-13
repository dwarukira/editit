import React, { useState } from "react"

import { Editor } from "slate-react";
import { ParagraphPlugin } from "./plugins/paragraph";
import DefaultRenderingPlugin from "./plugins/default-rendering";
import { TitlePlugin } from "./plugins/title";
import InsertBlockOnEnterPlugin from "./plugins/insert-block";


const plugins = [
    DefaultRenderingPlugin(),
    ParagraphPlugin(),
    TitlePlugin()
]

const EdititEditor = ({ value }) => {
    const [state, setValue] = useState(value)
    return (
        <Editor plugins={plugins}  value={state} onChange={({ value }) => { console.log(value); setValue(value)}} />
    )
}




export default EdititEditor