import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';

// Week 9
// Volgens tutorial

export default function DataEer(){
    const [data, setData] = useState('')

    const ParentToChild = () => {
    setData("This is data from Parent to Child");
    }
    return (
    <>
    <div className="App">
    <p>This is another testing area</p>
    {/* <Time /> */}
    <label>{data}</label>
    <Button variant="contained" onClick={() => ParentToChild()}>Click Parent</Button>
    </div>
    </>
)}