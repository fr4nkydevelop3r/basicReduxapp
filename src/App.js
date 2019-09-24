import React from 'react';
import { Provider } from 'react-redux';
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';

const App = () => (
  <Provider store={store}>
      <main>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
  </Provider>
)


export default App;
