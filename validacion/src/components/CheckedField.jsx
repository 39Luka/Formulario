function CheckedField({id, label, value, handleChange, error, required = false}){
    return(
        <>
            <div className="form__checkbox">
                <input
                    id={id}
                    type="checkbox"
                    className="form__checkbox-input"
                    checked={value}
                    onChange={handleChange}
                    required = {required}
                />
                <label htmlFor={id} className="form__checkbox-label">{label}</label>
            {error && <p className="form__error">{error}</p>}
            </div>
        </>
    )
}

export default CheckedField;