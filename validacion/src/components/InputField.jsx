function InputField({id, value, type = "text", label, handleChange }) {
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
                />

            </div>
        </>
    )
}

export default InputField;