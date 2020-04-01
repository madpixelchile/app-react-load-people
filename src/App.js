import React from 'react';
import './assets/scss/main.scss';

import {HeaderComponent} from './Components/HeaderComponent/HeaderComponent';
import {ShowPeopleComponent} from './Components/ShowPeopleComponent/ShowPeopleComponent';
import {FooterComponent} from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      
        <HeaderComponent />

        <main className={`container`}>

          <div className={`row`}>

            <div className={`col-md-6 col-md-offset-3`}>

              <ShowPeopleComponent />
            
            </div>
          
          </div>

        </main>

        {
          /* Enviamos una prop desde el JSX al estado inicial dentro del constructor y la 
          reflejamos en el render */
        }
        <FooterComponent footerTitle={`Juan Escudero`} myHref={`https://github.com/madpixelchile/`} />

    </div>
  );
}

export default App;
