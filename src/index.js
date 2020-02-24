import React from "react"
import ReactDOM from 'react-dom'
import Produse from "./componente/ListaDeProduse"
import Cos from "./componente/Cos"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cosProduse: [],
      produse: [],
      produseRezultate: []
    }
  }
  componentWillMount() {
    fetch("produse.json")
      .then(res => res.json())
      .then(data => {
         this.setState({ produse: data })
         this.produseRezultate()
      })
    .catch(err => {alert("baza de date nu a fost gasita")})
  }

  handleSterge = (click,produs) => {
    this.setState(state => {
      const a = state.cosProduse.filter(a => a.id !== produs.id)
      return { cosProduse: a }
    })
  }

  handleAdauga = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      let dejaAdaugat = false

      a.forEach(b => {
        if (b.id === produs.id) {
          dejaAdaugat = true;
          alert("deja adaugat")
        }
      })
      if (!dejaAdaugat) {
        a.push({ ...produs, totalProduse: 1 })
      }
      return { cosProduse: a }
    })
  }

  handlePlus = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      a.forEach(cp => {
        if (cp.id === produs.id) {
          cp.totalProduse += 1
        }
      })
      return { cosProduse: a }
    })
  }

  handleMinus = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      a.forEach(x => {
        if (x.id === produs.id) {
          x.totalProduse -= 1
          if (x.totalProduse <= 0) {
            x.totalProduse =1
          }
        }
      })
      return { cosProduse: a }
    })
  }

  handlePlateste = (click) => {
    this.setState(state => {
      return { cosProduse: [] }
    })
    alert("cumparat")
  }

  produseRezultate = () => {
    this.setState(state => {
      return { produseRezultate: state.produse }
    })
  }

  render() {
    return(
      <div>
        <Produse
          produse={this.state.produseRezultate}
          handleAdauga={this.handleAdauga}
        />
        <Cos
          cosProduse={this.state.cosProduse}
          handleSterge={this.handleSterge}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handlePlateste={this.handlePlateste}
        />
      </div>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('root'))
