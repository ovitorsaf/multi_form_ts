## O que é esse projeto?
Projeto de estudo utilizando React com Typescript de um form de Cadastro de Desenvolvedor em 5 etapas, sendo elas:
- Dados pessoais
- Dados profissionais
- Contatos Pessoais
- Revisão
- Form Completo

Os dados são compartilhados entre as etapas via Context, possui validação dos dados para que o prospect não avance as etapas sem ter preenchido as anteriores.

Possui também Sidebar onde é mostrado em que etapa o prospect está dentro do form, quando o mesmo finaliza o cadastro é carregado um 
novo tema onde não existe Sidebar, isso é para que ele não volte nos passos anteriores e acabe enviando o cadastro novamente.

Ao finalizar o cadastro o prospect tem a opção de iniciar um novo cadastro com a state zerada.

## Pacotes instalados
- styled-components
- react-router-dom

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
