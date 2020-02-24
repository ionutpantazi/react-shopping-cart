import React from 'react'
class Produse extends React.Component {
    render() {
        const listaProduse = this.props.produse.map(produs => (
            <div>
                <img src={produs.imagine} alt={produs.nume} style={{ width: 50, height: 50 }} />
                <span>{produs.nume}</span>
                <span>{produs.pret}</span>
                <button onClick={(click) => this.props.handleAdauga(click, produs)}>adauga</button>
            </div>
        ))
        return (
            <div>
                {listaProduse}
            </div>
        )
    }
}

export default Produse
