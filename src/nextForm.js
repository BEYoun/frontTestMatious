import React from 'react'
import axios from 'axios';

export default class SubmitComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultat: 'Pas de fichier encore convertis :(',
      file: ''
    }
  }
  onChange(e) {
    let files = e.target.files
    // console.warn("datafile : ", files)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      console.warn('img data', e.target.result)
      this.setState({
        resultat: "Attendez quelque seconde c'est en cour de traitement..."
      })
      this.setState({
        file: e.target.result
      })
      axios
        .post(`http://127.0.0.1:5000/`, {
        formData: {
          file: e.target.result
        }
      })
        .then(res => {
          console.log(res)
          this.setState({
            resultat: res["data"]
          })
        }).catch(e =>{
          this.setState({
            resultat: "erreur dans le code python :o"
          })
        })
        console.log(this.state)
    }
  }
  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h1>Upload</h1>
        <input 
          type="file" 
          name="file" 
          id="file" 
          onChange={(e) => this.onChange(e)} 
          accept=".wav,.mp3,.raw"/>
        <p>
          Resultat : {this.state.resultat}
        </p>
      </div>
    )
  }

}