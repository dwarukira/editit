import React from "react"


function DefaultRenderingPlugin() {
    return {
        renderNode(props, editor, next) {
            const { node, attributes, children } = props
            switch (node.type) {
                case 'paragraph':
                  return <p {...attributes}>{children}</p>
                case 'title':
                  return <h1 {...attributes}>{children}</h1>
                case 'quote':
                  return <blockquote {...attributes}>{children}</blockquote>
                case 'image': {
                  const src = node.data.get('src')
                  return <img {...attributes} src={src} />
                }
                default:
                  return next()
            }
         }
    }   
}


export default DefaultRenderingPlugin