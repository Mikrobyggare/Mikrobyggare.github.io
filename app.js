import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
  render() {
    return (
        <body>
            <h1>Hello</h1>
        </body>
    );
  }
};
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);