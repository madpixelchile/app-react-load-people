This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Desarrollo desafío APP login 
Desarrollo explicado en el arcivo: "./Components/ShowPeopleComponent-explicado.js"

## Desarrollo desafío APP login 
Desarrollado con node y dependencias generadas con npx create-react-app my-project-name

## SCSS incorporado en dependencias
Se incorpora el módulo de SASS para desarrollar de forma más resumida, limpia y ordenada.
<br/>
yarn add node-sass-chokidar

## Entorno de trabajo
Paso 1. Debes contar con git, node, yarn, npm en tu ordenador.<br/>
Paso 2. Clonar proyecto en la carpeta seleccionada.<br/>
Paso 3. Entrar a la carpeta del proyecto clonado y ejecutar el comando "yarn install" para generar el despliegue de los módulos de node.<br/>
Paso 4. Para testear (yarn start). <br/>


## Deploy
Configurar "package.json" - "homepage": "https://app-react-22022.web.app" o "http://url-de-produccion" en donde se va a visualizar esta SPA<br/>
Para publicar o generar producto final, comando(yarn build).

## Deploy directo a Firebase

Crear cuenta en Firebase y crear proyecto.<br/>
Configurar Firebase en el ordenador - comando: curl -sL firebase.tools | bash<br/>
Login en Firebase desde la terminal y acceder a la cuenta de correo asociada a Firebase - comando: firebase login.<br/>
En el menú de opciones desde la consola seleccionar hosting<br/>
Posteriormente seleccionar el proyecto en el listado de consola<br/>
Generar build "yarn build", y editar el archivo firebase.json en el apartado de "public", ingresar el nombre de la carpeta generada, en este caso "build".<br/>
Usar comando "firebase deploy", y los datos serán subidos al servidor.<br/> Finalmente La consola arrojará la url de destino.





## Available Scripts

In the project directory, you can run: 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

