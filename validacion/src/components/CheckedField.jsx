function CheckedField(id, label, value, handleChange){
    return(
        <>
            <div className="form__checkbox">
                <input
                    id={id}
                    type="checkbox"
                    className="form__checkbox-input"
                    checked={value}
                    onChange={handleChange}
                />
                <label htmlFor={id} className="form__checkbox-label">{label}</label>
            </div>
        </>
    )
}

export default CheckedField;