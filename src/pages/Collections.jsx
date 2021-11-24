import React, { useEffect, useState } from 'react';
import './styles/Collections.sass';

export const Collections = () => {

    const [Leyendo, setLeyendo] = useState([]);
    const [Pendiente, setPendiente] = useState([]);
    const [Terminados, setTerminados] = useState([]);

    useEffect(() => {

        let Arreglos = {
            leyendo: [],
            pendiente: [],
            terminados: [],
        };

        (async () => {

            const response = await fetch('https://wooks-api.vercel.app/books', {
                method: 'GET',
                headers: {
                    password: "Wooks.1001361984"
                }
            });

            const { data } = await response.json();
            console.log(data);

            data.forEach(book => {
                if (book.state === "Terminado") Arreglos.terminados.push(book);
                if (book.state === "Pendiente") Arreglos.pendiente.push(book);
                if (book.state === "Leyendo") Arreglos.leyendo.push(book);
            });

            setPendiente(Arreglos.pendiente);
            setTerminados(Arreglos.terminados);
            setLeyendo(Arreglos.leyendo);

        })();
    }, []);

    return (
        <>
            <h2>Colecciones</h2>
            <h3>Leyendo</h3>
            <section className="Leyendo">
                {
                    Leyendo ?
                        Leyendo.map((book) => (
                            <div key={book._id}> 
                                <h3>{book.title}</h3>
                                <img src={book.portada} alt={`Portada del libro: ${book.title}`} />
                            </div>
                        )) : <h3>Loading...</h3>
                }
            </section>
            <h3>Pendientes</h3>
            <section className="Pendiente">
                {
                    Pendiente ?
                        Pendiente.map((book) => (
                            <div key={book._id}> 
                                <h3>{book.title}</h3>
                                <img src={book.portada} alt={`Portada del libro: ${book.title}`} />
                            </div>
                        )) : <h3>Loading...</h3>
                }
            </section>
            <h3>Terminados</h3>
            <section className="Terminados">
                {
                    Terminados ?
                        Terminados.map((book) => (
                            <div key={book._id}> 
                                <h3>{book.title}</h3>
                                <img src={book.portada} alt={`Portada del libro: ${book.title}`} />
                            </div>
                        )) : <h3>Loading...</h3>
                }
            </section>
        </>
    );
};