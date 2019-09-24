import  { createStore } from 'redux';



const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Jose de Jesus Corona",
            foto: "https://firebasestorage.googleapis.com/v0/b/patitas-f4252.appspot.com/o/corona.jpg?alt=media&token=e8025a62-c09d-4a99-8a33-1966ca670001"
        },
        {
            id: 2,
            nombre: "Santiago Gimenez",
            foto: "https://firebasestorage.googleapis.com/v0/b/patitas-f4252.appspot.com/o/chaquito.jpg?alt=media&token=fd4dca26-1bcd-4a61-8e0d-87d0e98f1cdc"
        },
        {
            id: 3,
            nombre: "Roberto Alvarado",
            foto: "https://firebasestorage.googleapis.com/v0/b/patitas-f4252.appspot.com/o/alvarado.jpg?alt=media&token=f702ea69-bc15-4769-bf08-d29dcff1628b"
        },
        {
            id: 4,
            nombre: "Pablo Aguilar",
            foto: "https://firebasestorage.googleapis.com/v0/b/patitas-f4252.appspot.com/o/Pablo%20Aguilar.jpg?alt=media&token=3d8c759a-1f0c-472d-b6a8-2fdb6fc319c9"
        }
    ],
    titulares: [],
    suplentes: []
};

//recibe el estado actual, como tengo almacenada la data actualmente
//la accion indica que cambio debemos hacer en el estado para despues retornar un nuevo estado
const reducerEntrenador = (state=initialState, action) => {
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(jugador =>  jugador.id !== action.jugador.id)

        }
    } else if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(jugador =>  jugador.id !== action.jugador.id)
        }
    } else if(action.type === 'ELIMINAR_TITULAR'){
        return{
            ...state,
            titulares : state.titulares.filter(jugador => jugador.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    } else if(action.type === 'ELIMINAR_SUPLENTE'){
            return{
                ...state,
                suplentes: state.suplentes.filter(jugador => jugador.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
    }
    
    return state
}

export default createStore(reducerEntrenador);