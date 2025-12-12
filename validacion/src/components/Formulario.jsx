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


    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (formData.nombre.trim().length < 5) {
            newErrors.nombre = "El nombre debe contener al menos 5 caracteres"
        }

        if (formData.grupo.trim().length < 5) {
            newErrors.grupo = "El nombre de grupo / intérprete debe contener al menos 5 caracteres"
        }

        if (formData.anio.trim().length !== 4 || isNaN(formData.anio)) {
            newErrors.anio = "El año debe ser un número de 4 dígitos";
        }

        if (!formData.tipo) {
            newErrors.tipo = "Se debe seleccionar un tipo de música"
        }

        const regexLoc = new RegExp("ES-[0-9]{3}[A-Z]{2}");
        if (!regexLoc.test(formData.localizacion)) {
            newErrors.localizacion = "La localización debe seguir el siguiente patrón ES-001AA, siendo 001 números y AA mayúsculas"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return

        console.log(formData);
    };



    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
            <h2 className="form__title">Registrar Música</h2>

            <InputField id="nombre" value={formData.nombre} label="Nombre de la canción" handleChange={handleChange} error={errors.nombre} required />
            <InputField id="grupo" value={formData.grupo} label="Grupo / Intérprete" handleChange={handleChange} error={errors.grupo} required/>
            <InputField id="anio" value={formData.anio} type="number" label="Año de publicación" handleChange={handleChange} error={errors.anio} required/>
            <SelectField id="tipo" value={formData.tipo} label="Tipo de música" handleChange={handleChange} error={errors.tipo} required options={[
                { value: "rock", label: "Rock" },
                { value: "progressive", label: "Progressive" },
                { value: "punk", label: "Punk" },
                { value: "trash", label: "Trash" }
            ]} />
            <InputField id="localizacion" value={formData.localizacion} label="Localización" handleChange={handleChange} error={errors.localizacion} required/>
            <CheckedField id="prestado" value={formData.prestado} label="Prestado" handleChange={handleChange} error={errors.prestado} />

            <button type="submit" className="form__button form__button--primary">Guardar</button>
        </form>
    );
}

export default Formulario;
