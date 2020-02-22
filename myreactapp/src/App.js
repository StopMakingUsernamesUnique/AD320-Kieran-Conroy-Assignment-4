import React from 'react';
import './App.css';
import  {Header , TextBox, Pic, Button} from './components/components';


function App() {
  return (
    <div>
      
      <Header message = 'INDEX.HTML' />
      <TextBox message = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper tempus magna. Nunc sit amet tortor et libero tincidunt cursus. Mauris laoreet neque vel eros accumsan convallis. Integer eu lorem eros. Ut convallis massa in tellus accumsan, et convallis mauris tempor.'  />
      <Pic />
      <Button />

    </div>
  
  );
}

export default App;
