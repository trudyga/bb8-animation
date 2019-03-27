import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

ReactDOM.render(App, document.getElementById('appRoot'));

if (module.hot) {
  module.hot.accept('./app/App.jsx', () => {
    ReactDOM.render(App, document.getElementById('appRoot'));
  });
}
