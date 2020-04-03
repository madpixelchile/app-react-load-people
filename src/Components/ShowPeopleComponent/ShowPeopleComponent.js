
import React, {Component} from 'react';

import './ShowPeopleComponent.scss';

export class ShowPeopleComponent extends Component{

    constructor(){
        super();

        this.state = {
            loadedData: null, 
            toggleClass: false, 
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

    }

    showPersonDetails = (e)=>{

        const itemText = e.currentTarget.textContent;
        const itemKey = e.currentTarget.getAttribute('data-key');

        this.setState({
            toggleClass: false,  
            showPersonName: itemText, 
            personNumber: itemKey,
        });

     
        if(!this.state.addClass){ 
            setTimeout(()=>{
                this.setState({
                    addClass: true,
                });
            },200)
        }
    }
    
    render(){

        const loadedDataDone = this.state.loadedData; 
        const personKey = this.state.personNumber;

        return(
            
            <div className={`people-component`}>

                <button onClick={this.showPeopleBehaviours} className={`btn btn-primary ${this.state.toggleClass ? 'active' : ''}`} type="button"> {!this.state.showPersonName ? 'Show User list' : 'Show User list: ' + this.state.showPersonName }</button>

                <ul className={`user-names ${this.state.toggleClass ? 'active' : ''}`}>  

                    {

                        loadedDataDone && loadedDataDone.results.map((obj,i)=>(
                            
                            <li key={i}>
                                <button data-key={i} onClick={this.showPersonDetails} className={`btn btn-primary`} type={`button`}>
                                    <span className={`button-transition`} style={this.state.toggleClass ? {transitionDelay: i * 100 + 'ms'} : {transitionDelay: '0ms'}}>{obj.name.first}</span>
                               </button>
                            </li>
                            
                            
                        ))
                    }    

                </ul>


                <div className={`show-people-data`}>
                    <h3>{this.state.showPersonName ?  this.state.showPersonName : "You haven't chosen anyone yet"}</h3>

                    {
                        this.state.errorMessage ? <span className={`alert-message`}>{`JSON Cant be loaded, please refresh the APP. Juan Escudero`}</span> : ''
                    }

                    {
                        this.state.showPersonName ? 

                            <div className={`show-data-table-parent ${this.state.addClass ? 'active' : ''}`}>

                                <div className={`show-data-table`}>
                                    <div>
                                        
                                        { 
                                            loadedDataDone ? <div className={`content-data`}><div>{ `Gender:` }</div><div>{ loadedDataDone.results['' + personKey + '']['gender'] }</div></div> : '' 
                                        }
                                        { 
                                            loadedDataDone ? 
                                                <div className={`content-data`}><div>{ `Name:` }</div>
                                                    <div>{ 
                                                        
                                                        Object.values(loadedDataDone.results['' + personKey + ''].name).map((obj,i)=>(
                                                            <span key={i}>{' ' + obj}</span>
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
                                                        
                                                        typeof loadedDataDone.results['' + personKey + ''].location['' + obj +''] === 'object' ? 
                                                            <span className={`sub-list-data`}>
                                                                {
                                                                    Object.keys(loadedDataDone.results['' + personKey + ''].location[''+ obj +'']).map((objTwo,i)=>(
                                                                        <span key={i}>{`${objTwo}: ${loadedDataDone.results['' + personKey + ''].location[''+ obj +''][''+ objTwo +'']} `}</span>
                                                                    )) 
                                                                }
                                                            </span>
                                                        : obj + ':' +  loadedDataDone.results['' + personKey + ''].location['' + obj +''] 
                                                        
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