import React from 'react';

import ErrorBoundary from 'utilities/ErrorBoundary';
import Error from 'utilities/Error';
import Hello from 'utilities/Hello';
// import apiService from 'utilities/apiService';
import { dragonballService, detallePersonajeService } from 'utilities/apiService';
import eventBus from 'utilities/eventBus';
import 'utilities/styles';

// import funcion from 'utilities/funcion';

const Ejemplo = () => {

  // React.useEffect(() => {
  //   // Cargar el módulo federado dinámicamente
  //   import('utilities/funcion').then(({ default: addNumbers }) => {
  //     console.log(addNumbers(2, 3));
  //   }).catch((error) => {
  //     console.error('Error al cargar el módulo federado:', error);
  //   });
  // }, []);

  // Usa apiService para consumir servicios
  // apiService.get()
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching Dragon Ball characters:', error);
  //   })

  dragonballService.get('/')
    .then(response => {
      console.log({dragonball: response.data});
    })
    .catch(error => {
      console.error('Error fetching Dragon Ball:', error);
    });

  detallePersonajeService.get('/')
    .then(response => {
      console.log({detallePersonaje: response.data});
    })
    .catch(error => {
      console.error('Error fetching detalle personaje:', error);
    });

  //Publicar un evento
  eventBus.publish('myEvent', { key: 'Marcela' });

  // Suscribirse a un evento
  // eventBus.subscribe('myEvent', (data) => {
  //   console.log('Evento recibido:', data);
  // });
  // Para cancelar la suscripción
  // eventBus.unsubscribe('myEvent', callbackFunction);

  return (
    <>
      <div className="app">
        <h1>Mi Aplicación con Módulos Federados</h1>
      </div>

      <Error>
        <Hello />
      </Error>
    </>
  );
};

export default Ejemplo;
