import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        alert('Nom: ' + this.state.nom);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <h1>MON FORMULAIRE</h1>

            <label>Nom</label>
            <input
              type="text"
              name="nom"
              value={this.state.nom}
              onChange={this.handleChange}
              className="form-control"
            />

            <label>Prénom</label>
            <textarea
              name="prenom"
              value={this.state.prenom}
              onChange={this.handleChange}
              className="form-control"
            ></textarea>

            <label>Compétences</label>
            <select
              name="skill"
              value={this.state.skill}
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="">---</option>
              <option value="Integrateur">Integrateur</option>
              <option value="Developpeur">Developpeur</option>
            </select>

            <button className="btn btn-primary">Envoyer</button>
            {this.state.nom.length > 0 && <h2>Bonjour {this.state.nom} !</h2>}
          </form>
        );
    }
}

export default Form;