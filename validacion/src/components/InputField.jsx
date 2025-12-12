function InputField({id, value, type = "text", label, handleChange, error , required = false}) {
    return (
        <>
            <div className="form__field">
                <label htmlFor={id} className="form__label">{label}</label>
                <input
                    id={id}
                    type={type}
                    className="form__input"
                    value={value}
                    onChange={handleChange}
                    required = {required}
                />
            {error && <p className="form__error">{error}</p>}
            </div>
        </>
    )
}

export default InputField;