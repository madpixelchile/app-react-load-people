
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
            loadedData: null, //vacío - negativo(undefined, '', 0, false, null)
            toggleClass: false, //Haremos que sea contrario de su mismo estado
            showPersonName: '',
            personNumber: 0,
            addClass: false,
            errorMessage: false,
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
            console.log(error);
            this.setState({
                errorMessage: true,
            });
        })

    }

    showPeopleBehaviours =() =>{
        this.setState({
            toggleClass: !this.state.toggleClass,
        })

        // console.log(document.all); //Accedo a propiedades del HTML Collection del DOM
    }

    showPersonDetails = (e)=>{

        const itemText = e.currentTarget.textContent; //Capturamos el evento de si mismo e.currentTarget
        const itemKey = e.currentTarget.getAttribute('data-key');

        // console.log(itemText); //Hacemos pruebas de obtención de datos del dom
        // console.log(itemKey); //Hacemos pruebas de obtención de datos del dom

        this.setState({
            toggleClass: false,
            showPersonName: itemText,
            personNumber: itemKey,
        });

        //Para que tenga un fade in el padre de un contenido que no existe solo en el primer intento
        //cambia el estado a true después de un time out, solo si el estado inicial es falso
        //así el timeout lo hará solo una vez
        if(!this.state.addClass){ 
            setTimeout(()=>{
                this.setState({
                    addClass: true,
                });
            },200)
        }
    }
    
    render(){

        //para más orden (const porque esta variable explícita impide cambiar manualmente su valor);
        const loadedDataDone = this.state.loadedData; 
        const personKey = this.state.personNumber;

        // console.log(loadedDataDone); //Para ver si cargan los datos de la promesa y además ver la estructura

        return(
            
            <div className={`people-component`}>

                <button onClick={this.showPeopleBehaviours} className={`btn btn-primary ${this.state.toggleClass ? 'active' : ''}`} type="button"> {!this.state.showPersonName ? 'Show User list' : 'Show User list: ' + this.state.showPersonName }</button>

                <ul className={`user-names ${this.state.toggleClass ? 'active' : ''}`}>  

                    {
                        
                        //Hacemos un map dependiendo si la data fue cargada desde la promesa
                        //Esto lo podemos sentenciar también con un operador ternario Ej: blah ? blah.map... : ''
                        
                        loadedDataDone && loadedDataDone.results.map((obj,i)=>(
                            //Trato de dejar los classNames o atributos class con expresiones literales
                            //para tener mas chance de cargarle manualmente valores dinámicos
                            //Uso type button, ya que por defecto si hay un form activa el "action"
                            
                            //React app nos obliga a trabajar con un key para identificar los elementos del  
                            //recorrido.
                            //Genero un data para tomar el key usarlo para mostrar los datos de forma dinámica
                            <li key={i}>
                                <button data-key={i} onClick={this.showPersonDetails} className={`btn btn-primary`} type={`button`}>
                                    <span className={`button-transition`} style={this.state.toggleClass ? {transitionDelay: i * 100 + 'ms'} : {transitionDelay: '0ms'}}>{obj.name.first}</span>
                               </button>
                            </li>
                            
                            //Para el toggle class del botón ocuparemos un operador ternario y literal string
                        ))
                    }    

                </ul>


                <div className={`show-people-data`}>

                    <h3>{this.state.showPersonName ?  this.state.showPersonName : "You haven't chosen anyone yet"}</h3>

                    {
                        //Mensaje de alerta de error en caso de que la promesa detecte que los datos de JSON no 
                        //están llegando a través del fetch
                        this.state.errorMessage ? <span className={`alert-message`}>{`JSON Cant be loaded, please refresh the APP. Juan Escudero`}</span> : ''
                    }

                    {
                        this.state.showPersonName ? 

                            <div className={`show-data-table-parent ${this.state.addClass ? 'active' : ''}`}>

                                <div className={`show-data-table`}>
                                    <div>
                                        
                                        { 
                                            //Para realizar pruebas ocupaba el índice o index 0 del arreglo de personas
                                            //Posteriormente se hará dinámico en base a un estado declarado en el constructor 
                                            //ej: results[0] - se liga al data que se le asigna a cada elemento de la lista desde su KEY
                                            loadedDataDone ? <div className={`content-data`}><div>{ `Gender:` }</div><div>{ loadedDataDone.results['' + personKey + '']['gender'] }</div></div> : '' 
                                        }
                                        { 
                                            loadedDataDone ? 
                                                <div className={`content-data`}><div>{ `Name:` }</div>
                                                    <div>{
                                                        Object.values(loadedDataDone.results['' + personKey + ''].name).map((obj,i)=>(
                                                            <span key={i}>{obj}</span>
                                                        ))
                                                    }</div>
                                                </div>
                                            : '' 
                                        }
                                    
                                        { loadedDataDone ? <div className={`content-data`}><div>{ `Email:` }</div><div>{ loadedDataDone.results['' + personKey + ''].email }</div></div> : '' }
                                        { loadedDataDone ? <div className={`content-data`}><div>{ `Phone:` }</div><div>{ loadedDataDone.results['' + personKey + ''].phone }</div></div> : '' }
                                        { loadedDataDone ? <div className={`content-data`}><div>{ `Location:` }</div><div className={`box-multiple-data`}>{
                                            Object.keys(loadedDataDone.results['' + personKey + ''].location).map((obj,i)=>(
                                                <span key={i}>
                                                    {   
                                                        //Ternario para consultar por el tipo de dato y si es necesario hacer un map de sus propiedades
                                                        typeof loadedDataDone.results['' + personKey + ''].location['' + obj +''] === 'object' ? 
                                                            <span className={`sub-list-data`}>
                                                                {
                                                                    Object.keys(loadedDataDone.results['' + personKey + ''].location[''+ obj +'']).map((objTwo,i)=>(
                                                                        <span key={i}>{`${objTwo}: ${loadedDataDone.results['' + personKey + ''].location[''+ obj +''][''+ objTwo +'']} `}</span>
                                                                    )) 
                                                                }
                                                            </span>
                                                        : obj + ':' +  loadedDataDone.results['' + personKey + ''].location['' + obj +''] //De lo contrario carga un dato del primer nivel
                                                        
                                                    }
                                                </span>
                                            ))
                                            
                                        }</div></div> : '' }
                                    </div>
                                </div>

                            </div>

                            
                        
                        
                        : ''



                    }

                </div>
                

            </div>
            

        )


    }


}