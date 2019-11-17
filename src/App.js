import React from 'react';
import page1 from './Page/Page1'
import Headbar from './Page/header'
import SmallHeader from './Page/smallHeader'
import Content from './Page/Content'
import './App.css';

function App() {
  return (
    <div className="App">
        <Headbar/>
        <SmallHeader/>
        <Content/>
    </div>
  );
}

export default App;
