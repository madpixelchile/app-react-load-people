
//Sabemos que trabajamos con clases para poder instanciarlas 
//En este caso react nos ofrece trabajar con una sub clase de la clase Component
//Por eso hacemos una extensión de la clase padre
//El constructor funciona en base al concepto "GETTER AND SETTER" en este caso "Seteamos los datos"
//Seteamos las propiedades del estado inicial con this.state

//El uso de "THIS", es porque estamos trabajando dentro de un objeto tipo clase, y para modificar propiedades
//dentro de un Objeto se hace referencia con this.
//Otros ejemplos del uso del this lo podemos aplicar modificando propiedades de si mismo 
//a través de métodos, que se reducen a funciones dentro de una propiedad o funciones dentro de un Objeto

import React, {Component} from 'react';

import './ShowPeopleComponent.scss';

export class ShowPeopleComponent extends Component{

    constructor(){
        super();

        this.state = {
            loadedData: null,
            toggleClass: false, //Haremos el sistema de siempre revelar el contrario de su mismo estado
            showPersonName: '',
        }

    }

    componentDidMount = ()=>{
        
        fetch('https://randomuser.me/api/?results=10').then((resolve)=>{
            return resolve.json();
        }).then((data)=>{

            this.setState({
                loadedData: data,
            })

        }).catch((error)=>{
            console.log(error)
        })

    }

    showPeopleBehaviours =() =>{
        this.setState({
            toggleClass: !this.state.toggleClass,
        })
        // console.log(document.all); //Accedo a propiedades del HTML Collection del DOM

        let divs = document.querySelectorAll('div');
        
    }

    showPersonDetails = (e)=>{

        const itemText = e.target.textContent;

        console.log(itemText);

        this.setState({
            toggleClass: false,
            showPersonName: itemText,
        });
    }
    
    render(){

        //para más orden (const porque esta variable explícita impide cambiar manualmente su valor);
        const loadedDataSuccess = this.state.loadedData; 

        console.log(loadedDataSuccess); //Para ver si cargan los datos de la promesa y además ver la estructura

        return(
            
            <div className={`people-component`}>

                <button onClick={this.showPeopleBehaviours} className={`btn btn-primary ${this.state.toggleClass ? 'active' : ''}`} type="button"> {!this.state.showPersonName ? 'Show User list' : 'Show User list: ' + this.state.showPersonName }</button>

                <ul className={`user-names ${this.state.toggleClass ? 'active' : ''}`}>  

                    {
                        
                        //Hacemos un map dependiendo si la data fue cargada desde la promesa
                        //Esto lo podemos sentenciar también con un operador ternario Ej: blah ? blah.map... : ''
                        
                        this.state.loadedData && this.state.loadedData.results.map((obj,i)=>(
                            //Trato de dejar los classNames o atributos class con expresiones literales
                            //para tener mas chance de cargarle manualmente valores dinámicos
                            //Uso type button, ya que por defecto si hay un form activa el "action"
                            
                            //React app nos obliga a trabajar con un key para identificar los elementos del  
                            //recorrido.
                            //Genero un data para tomar el key usarlo para mostrar los datos de forma dinámica
                            <li key={i}>
                                <button data-key={i} onClick={this.showPersonDetails} className={`btn btn-primary`} type={`button`}>
                                    <span className={`button-transition`}>{obj.name.first}</span>
                               </button>
                            </li>
                            
                            //Para el toggle class del botón ocuparemos un operador ternario y literal string
                        ))
                    }    

                </ul>


                <div className={`show-people-data`}>

                    <h3>{!this.state.showPersonName ? 'No has elegido a nadie aún' : this.state.showPersonName}</h3>

                    {
                        this.state.loadedData ? Object.keys(this.state.loadedData.results[0]).map((obj,i)=>(
                            
                            <div data-key={i} key={i}>
                                { obj === 'gender' ? <div>{ `${obj}: ${ this.state.loadedData.results[0][''+ obj +''] }` }</div> : '' }
                                { obj === 'email'  ? <div>{ `${obj}: ${ this.state.loadedData.results[0][''+ obj +''] }` }</div> : '' }
                                { obj === 'cell'   ? <div>{ `${obj}: ${ this.state.loadedData.results[0][''+ obj +''] }` }</div> : '' }
                                { obj === 'location' ? <div>{ 
                                    
                                    this.state.loadedData ? Object.keys(this.state.loadedData.results[0].location).map((obj,i)=>(
                                        
                                        <div key={i}>
                                            { obj === 'country' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].location[''+ obj +''] }` }</div> : '' }
                                        </div>
            
                                    )) : ''

                                } </div> : '' }
                                { obj === 'name' ? <div>{ 
                                    
                                    this.state.loadedData ? Object.keys(this.state.loadedData.results[0].name).map((obj,i)=>(
                                        
                                        <div key={i}>
                                            { obj === 'title' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                            { obj === 'first' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                            { obj === 'last' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div>  : '' }
                                        </div>
            
                                    )) : ''

                                } </div> : '' }
                            </div>

                        )) : ''
                    }

                    {/* {
                        this.state.loadedData ? Object.keys(this.state.loadedData.results[0].name).map((obj,i)=>(
                            
                            <div key={i}>
                                { obj === 'title' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                { obj === 'first' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                { obj === 'last' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div>  : '' }
                            </div>

                        )) : ''
                    }

                    {
                        this.state.loadedData ? Object.keys(this.state.loadedData.results[0].name).map((obj,i)=>(
                            
                            <div key={i}>
                                { obj === 'title' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                { obj === 'first' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div> : '' }
                                { obj === 'last' ? <div>{ `${obj}: ${ this.state.loadedData.results[0].name[''+ obj +''] }` }</div>  : '' }
                            </div>

                        )) : ''
                    } */}
                    
                </div>
                

            </div>
            

        )


    }


}