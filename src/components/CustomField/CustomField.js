
export const CustomField = ({
                         input,
                         label,
                         placeholder,
                         type,
                         meta: { touched, error, warning }
                     }) => {
    return (
        <div className="center ">
            <div className={"column w100"}>
                <div>
                    <div className="center">
                        <input className={touched && error ? "custom-field red-borders" : "custom-field"} {...input} placeholder={label} type={type} />
                    </div>
                    {
                        touched &&
                        (error && <div className="center"><label className={"error"}>{error}</label></div>)
                    }
                </div>
            </div>
        </div>
    )
}
