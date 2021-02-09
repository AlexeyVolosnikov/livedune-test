import {CustomField} from "../../components/CustomField/CustomField";
import {Field} from "redux-form";
import {mailValidation, notEmpty} from "../../validators/validators";
import {reduxForm} from "redux-form";
import {BlueLink} from "../../components/BlueLink/BlueLink";
import "./missedEmailForm.scss";


const MissedEmailForm = props => {
    const { handleSubmit } = props
    return (
        <div className={"form-width"}>
            <form onSubmit={ handleSubmit(props.onSubmit) }>
                <div className="center">
                    <div className="missed-field">
                        <Field
                            name={"login"}
                            component={CustomField}
                            type={"text"}
                            label={'Ваш e-mail'}
                            validate={[mailValidation, notEmpty]}
                        />
                    </div>
                </div>
                <div className="center">
                    <button >
                        <div className={"missed-blue-link-btn"}>
                            Отправить заново
                        </div>
                    </button>
                </div>
                <div className="center missed-cancel">
                    <BlueLink to={"/"} text={"Отменить"} />
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    form : "missed"
})(MissedEmailForm)
