import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BaristaForm from './baristaForm';
import BaristaList from './baristaList';


const initialFormValues = {
  name: '',
  favBrewMethod: '',
  favCountryOfOrigin: '',
  favDrink: '',
  howWavy: '',
}

export default function App() {
const [formValues, setFormValues] = useState(initialFormValues);
const [baristas, setBaristas] = useState([])

const updateForm = (name, value) => {
  setBaristas({ ...initialFormValues, [name]: value })
};
const submitForm = () => {};


return (
 <div className='sbs-wrapper'>
 <div className="form-container">
  <h1>Join the Coffee<br/>Connoisseur Collective</h1>
    <BaristaForm 
    values ={formValues}
    update={updateForm}
    submit={submitForm}
    />
  </div>
  <div className='member-container'>
  <h1>Members:</h1>
  {
  //  baristas.forEach(barista => {
  //     return (
  //       <BaristaList key={barista.key} info={barista} />
  //     )
  //   }) 
  }
  </div>
 </div>
);
}

