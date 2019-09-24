import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({titulares, eliminarTitular}) => {
    return(
        <section>
            <h2>Regular players</h2>
            <div className='cancha'>
                {
                    titulares.map((jugador) => (
                        <article className='titular' key={jugador.id}>
                            <div>
                                <img src={jugador.foto} alt={jugador.nombre} width="100px" height="100px"/>
                                <button onClick={() => { eliminarTitular(jugador) }}>X</button>
                            </div>
                            <p>{jugador.nombre}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}


const mapDispatchToProps = dispatch => ({
    eliminarTitular(jugador) {
        dispatch({
            type: "ELIMINAR_TITULAR",
            jugador
        })
    },
    
})

const mapStateToProps = state => ({
    titulares: state.titulares
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);