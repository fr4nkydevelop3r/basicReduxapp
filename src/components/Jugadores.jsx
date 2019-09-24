import React from 'react';
import { connect } from 'react-redux';


const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => {


    

    return(
        <section>
            <h2>Players</h2>
            <div className='contenedor-jugadores'>
                {
                    jugadores.map((jugador, index) => (
                        <article className='jugador' key={index}>
                            <img src={jugador.foto} alt={jugador.nombre} width="100px" height="100px" />
                            <h3>{jugador.nombre}</h3>
                            <div>
                                <button onClick={() => { agregarTitular(jugador) }} >Regular</button>
                                <button onClick={() => { agregarSuplente(jugador)}} >Substitute</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
    
}


//se encargan de llevar las acciones que van a ser leidas por el reducer para podder
//cambiar al estado
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})



/*({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    }
}) */

const mapStateToProps = state => ({
    jugadores: state.jugadores
})



export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)