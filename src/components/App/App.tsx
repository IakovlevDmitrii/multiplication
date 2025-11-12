import { Provider } from 'react-redux';
import { store } from '../../store';
import Game from '../Game/Game';
import './App.module.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Game />
      </div>
    </Provider>
  );
}

export default App;