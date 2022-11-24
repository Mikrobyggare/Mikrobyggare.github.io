import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Harborer History</h1>
      </div>
    );
  }
};
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);