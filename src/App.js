import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var json = {
      active: { label: 'Active', value: '12' },
      automatic: { label: 'Automatic', value: '8' },
      waiting: { label: 'Waiting', value: '1' },
      manual: { label: 'Manual', value: '3' },
    };
    var arr = [];
    Object.keys(json).forEach(function (key) {
      arr.push(json[key]);
    });

    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <div>
          <ul>
            {arr.map((item) => (
              <Child key={item.label} label={item.label} value={item.value} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
