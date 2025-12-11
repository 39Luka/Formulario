function SelectField({id, value, label, options, handleChange} ) {
    return (
        <>
            <div className="form__field">
                <label htmlFor={id} className="form__label">{label}</label>
                <select
                    id={id}
                    className="form__select"
                    value={value}
                    onChange={handleChange}
                >

                    <option value="">--Selecciona--</option>
                    
                    {options.map((opt) =>
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    )}

                </select>
            </div>
        </>
    )
}

export default SelectField;