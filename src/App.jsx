import React, {useState} from 'react';
import './App.css';
import {InputGroup, Input, InputGroupAddon, Button, FormGroup, Label} from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toastContainer, tost} from 'react-toastify'
function App() {
  // States
  const [maxResults, setMaxResults] = useState(10)
  const [startIndex, setStartIndex] = useState(1)
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false)
  //Handle Search
  const handleSubmit = () => {
    setLoading(true)
    
  }
  // Main Show Case
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
            <Input
              placeholder='Book Search'
              value={query}
              onChange={e=> setQuery (e.target.value)}
              />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={handleSubmit}>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="d-flex text-white justify-content-center">
            <FormGroup className='ml-5'>
              <Label for='maxResults'>Max Results</Label>
              <Input
                type='number'
                id='maxResults'
                placeholder='Max Results'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
                />
            </FormGroup>
            <FormGroup className='ml-5'>
              <Label for='startIndex'>Start Index</Label>
              <Input
                type='number'
                id='startIndex'
                placeholder='Start Index'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };
  return <div>{
    mainHeader()
    <ToastContainer />
    }</div>;
}

export default App;
