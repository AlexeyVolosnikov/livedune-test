import {CustomField} from "../../components/CustomField/CustomField";
import {Field} from "redux-form";
import {mailValidation, notEmpty} from "../../validators/validators";
import {reduxForm} from "redux-form";
import "./missedEmailForm.scss";


const MissedEmailForm = props => {
    const { handleSubmit } = props
    return (
        <div className={"form-width"}>
            <form onSubmit={ handleSubmit(props.onSubmit) }>
                <Field
                    name={"login"}
                    component={CustomField}
                    type={"text"}
                    label={'Ваш e-mail'}
                    validate={[mailValidation, notEmpty]}
                />

                <div className="center">
                    <button className={"btn-width"}>
                        <div className={"blue-link-btn"}>
                            Отправить заново
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    form : "missed"
})(MissedEmailForm)
