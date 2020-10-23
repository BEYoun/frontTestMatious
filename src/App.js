import React, {useEffect} from 'react';
import axios from 'axios';
import Formulaire from './nextForm'
function App() {
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        const persons = res.data;
        console.log(persons)
      })
    return () => {};
  }, []);
  return (
    <div className="App">
      <Formulaire />
    </div>
  );
}

export default App;