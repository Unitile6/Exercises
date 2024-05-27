import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

// Creation Date 17-04-2024

// Week 9

// Goal of the file: Try Parasitic Event latching.



// De event moet dus loggen wanneer het wordt gezonden.
// (1) Er moet een event listener komen die het event opvangt. Dan weten we of het event stuurt bij input.
// (-) Eerst bij manual input. Daarna bij Auto input.
// (2) Hiervan moet de callback simpelweg een log zenden.
// (3) Daarna moet er worden gecontroleerd of er data meegestuurd wordt. 

export default function ParasiticEventLatching(){
const [name, setName] = useState('');

  const handleUsernameChange = (newValue: string) => {
    console.log("onChange triggered:" + newValue);
    setName(newValue);
  };

  const forceChange = () => {
    console.log("Button pressed!");
    setName("John");
    //setName("Pietertje") // Deze zet username op pietertje maar lijkt geen onchange te triggeren.
    //handleUsernameChange("Pietertje"); // Nu is natuurlijk ook weer een direct call. Dus is het dan wel de event?
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // misschien moet deze weg??
    console.log('Username:', name);
  };
  return (
    <div>
                
    <label>Open console (F12) om details te zien...</label>
    <p></p>
      <h1>Type your Name</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="name"
          type="text"
          value={name}
          onChange={handleUsernameChange}
        />
        <Button variant="contained" type="submit" onClick={forceChange}>Change text to Pietertje</Button>
      </form>
    </div>
  );
};

type FormProps = {
    label: string,
    type: string,
    value: string,
    onChange: Function
}
const FormInput = ({ label, type, value, onChange }: FormProps) => {
    const handleChange = (e) => {
      onChange(e.target.value);
      console.log("was changed");
    };
  
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            marginBottom: '10px',
            width: '100%'
          }}
        />
      </div>
    );
  };
/* import React from "react";
import { useState } from "react";

// Creation Date 17-04-2024
// Goal of the file: Try Parasitic Event latching.



// De event moet dus loggen wanneer het wordt gezonden.
// (1) Er moet een event listener komen die het event opvangt. Dan weten we of het event stuurt bij input.
// (-) Eerst bij manual input. Daarna bij Auto input.
// (2) Hiervan moet de callback simpelweg een log zenden.
// (3) Daarna moet er worden gecontroleerd of er data meegestuurd wordt. 

export default function ParasiticEventLatching(){
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (newValue) => {
    setUsername(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with username and password
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const FormInput = ({ label, type, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            marginBottom: '10px',
            width: '100%'
          }}
        />
      </div>
    );
  }; */