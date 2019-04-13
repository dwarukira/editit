import React from "react"
import isHotkey from 'is-hotkey'

export const ParagraphPlugin = (options) => {
    console.log(options);
    
    return {
        onKeyDown(event, editor, next) {
            if(isHotkey('cmd+p', event)) {
                const isParagraph = editor.value.blocks.some(block => block.type === 'paragraph')
                editor.setBlocks(isParagraph ? 'title': 'paragraph')
            }

            return next()
          }
    }
}


