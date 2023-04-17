
import Student from './Student';
import Student2 from './Student2';

import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <>
        <Student />
        <Student2 name="amit" roll={34} />
      </>
    );
  }
}

export default App;
