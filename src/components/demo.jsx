import React from 'react';
import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Prueba extends Component{
    state= { 
        contador: 1,
        varvariant: "warning"
    }
    handleSize(){
        const size=30
        let style = {
            fontSize: size,
            fontWeight: 100,
            color: "#FFFFFF"
        }
        return style
    }
    render() {
        return (<Button variant={this.state.varvariant}> {this.state.contador} Esto es JSX {2+2}</Button>)
    }
}

export default Prueba;