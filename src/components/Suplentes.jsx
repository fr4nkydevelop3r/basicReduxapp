import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes, eliminarSuplente}) => {
    return(
        <section>
            <h2>Substitute players</h2>
            <div className='cancha'>
                {
                    suplentes.map((jugador) => (
                        <article className='suplente' key={jugador.id}>
                            <div>
                                <img src={jugador.foto} alt={jugador.nombre} width="100px" height="100px" />
                                <button onClick={() => eliminarSuplente(jugador)}>X</button>
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
    eliminarSuplente(jugador) {
        dispatch({
            type: "ELIMINAR_SUPLENTE",
            jugador
        })
    },
    
})

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);