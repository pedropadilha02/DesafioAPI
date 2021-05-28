import React, {useState} from 'react';
import './App.css';
import {InputGroup, Input, InputGroupAddon, Button, FormGroup, Label} from 'reactstrap'
function App() {
  // States
  
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className="filter"></div>
        <h1 className='display-2 text-center text-white mb-3' style={{zIndex: 2}}>
          Google Books
        </h1>
        <div style={ {width: '60%', zIndex: 2} }>
          <InputGroup size='lg' className='mb-3'>
            <Input placeholder='Book Search' />
            <InputGroupAddon addonType='append'>
              <Button color='secondary'>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="d-flex text-white justify-content-center">
            <FormGroup className='ml-5'>
              <Label for='maxResults'>Max Results</Label>
              <Input type='number' id='maxResults' placeholder='Max Results' />
            </FormGroup>
            <FormGroup className='ml-5'>
              <Label for='startIndex'>Start Index</Label>
              <Input type='number' id='startIndex' placeholder='Start Index' />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };
  return <div>{mainHeader()}</div>;
}

export default App;
