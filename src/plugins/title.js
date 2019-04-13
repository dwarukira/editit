import React from "react"
import isHotkey from 'is-hotkey'

export const TitlePlugin = (options) => {

    return {
        onKeyDown(event, editor, next) {
            console.log(event,options, "edtior_____",)
            if(isHotkey('Control+t', event)) {
                console.log(event, "edtior")
                const isTitle = editor.value.blocks.some(block => block.type === 'title')
                editor.setBlocks(isTitle ? 'paragraph' :'title')
            }

            if(event.key === 'Enter' && event.node.type === 'title') {
                editor.insertBlock('paragraph')
            }
            

            return next()
          }

          
    }
}


