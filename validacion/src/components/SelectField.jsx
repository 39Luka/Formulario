function SelectField({id, value, label, options, handleChange, error, required} ) {
    return (
        <>
            <div className="form__field">
                <label htmlFor={id} className="form__label">{label}</label>
                <select
                    id={id}
                    className="form__select"
                    value={value}
                    onChange={handleChange}
                    required = {required}
                >

                    <option value="" disabled>--Selecciona--</option>
                    
                    {options.map((opt) =>
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    )}

                </select>
             {error && <p className="form__error">{error}</p>}
            </div>
        </>
    )
}

export default SelectField;