import { useState } from "react";
function Formulario() {

    const [formData, setFormData] = useState({

        nombre: "",
        grupo: "",
        anio: "",
        tipo: "",
        localizacion: "",
        prestado: false

    })


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData( (prev) => ({
            ...prev,
            [id]: value
        }))
    }

    return (
        <>

            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                />

                <label htmlFor="grupo">Grupo/Intérprete:</label>
                <input
                    id="grupo"
                    type="text"
                    value={formData.grupo}
                    onChange={handleChange}

                />

                <label htmlFor="anio">Año de publicación:</label>
                <input
                    id="anio"
                    type="number"
                    value={formData.anio}
                    onChange={handleChange}

                />

                <label htmlFor="tipo">Tipo de música:</label>
                <select 
                    id="tipo"
                    name="tipoMusica"
                    value={formData.tipo}
                    onChange={handleChange}

                >
                    <option value="">--Selecciona--</option>
                    <option value="rock">Rock</option>
                    <option value="progressive">Progressive</option>
                    <option value="punk">Punk</option>
                    <option value="trash">Trash</option>

                </select>

            </form>

        </>
    )
}

export default Formulario;