
import React, {Component} from 'react';
import './FooterComponent.scss';

export class FooterComponent extends Component{
    
    constructor(props){     //El constructor sirve para traer parámetros externos como el envío de props
        super(props);            //Invoca al súper constructor ya que esta es una clase hija de la class Component
        this.state = {      //Trabajo con estados
            tituloFooter: this.props.footerTitle,
            myHref: this.props.myHref,
        }
    }

    render(){  //Función de renderización o lo que muestra despues de las fases de montaje componentes

        return(
            <footer>

                <p className="text-center">{`Service data test developed by `}<a href={this.state.myHref} target={`blank`}>{ this.state.tituloFooter }</a></p>

            </footer>
        )

    }

}

