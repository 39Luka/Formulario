import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckedField from "./CheckedField";

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "",
        grupo: "",
        anio: "",
        tipo: "",
        localizacion: "",
        prestado: false
    });

    const handleChange = (e) => {
        const { id, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Registrar Música</h2>

            <InputField id="nombre" value={formData.nombre} label="Nombre de la canción" handleChange={handleChange} />
            <InputField id="grupo" value={formData.grupo} label="Grupo / Intérprete" handleChange={handleChange} />
            <InputField id="anio" value={formData.anio} type="number" label="Año de publicación" handleChange={handleChange} />
            <SelectField id="tipo" value={formData.tipo} label="Tipo de música" handleChange={handleChange} options={[
                { value: "rock", label: "Rock" },
                { value: "progressive", label: "Progressive" },
                { value: "punk", label: "Punk" },
                { value: "trash", label: "Trash" }
            ]} />
            <InputField id="localizacion" value={formData.localizacion} label="Localización" handleChange={handleChange} />
            <CheckedField id="prestado" value={formData.prestado} label="Prestado" handleChange={handleChange} />

            <button type="submit" className="form__button form__button--primary">Guardar</button>
        </form>
    );
}

export default Formulario;
