

import React, {Component} from 'react';

import './HeaderComponent.scss';

export class HeaderComponent extends Component{
    
    constructor(){     //El constructor sirve para traer parámetros externos como el envío de props
        super();       //Invoca al súper constructor ya que esta es una clase hija de la class Component
        this.state = { //Trabajo con estados
            tituloSeccion: 'Load user data'
        }
    }

    render(){  //Función de renderización o lo que muestra despues de las fases de montaje componentes

        return(
            <header>
                <h1 className="text-center">{`APP: ${this.state.tituloSeccion}`}</h1>
            </header>
        )

    }

}