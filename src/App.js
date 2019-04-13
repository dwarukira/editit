import React, { Component } from 'react';
import { Value } from "slate";
import "./App.css"
import Editor from "./Editor"; 


const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'd',
              },
            ],
          },
        ],
      },
    ],
  },
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor value={initialValue} />
      </div>
    );
  }
}

export default App;
