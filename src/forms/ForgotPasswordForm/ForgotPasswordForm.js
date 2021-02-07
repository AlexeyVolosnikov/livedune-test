import { CustomField } from "../../components/CustomField/CustomField";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {GreyLink} from "../../components/GreyLink/GreyLink";
import {mailValidation} from "../../validators/validators";
import "./forgotPasswordForm.scss";

const ForgotPasswordForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="center">
                <Field
                    name={'login'}
                    component={CustomField}
                    label={"E-mail"}
                    validate={[mailValidation]}
                />
            </div>
            <div className="center w100">
                <button className={"btn-width"}>
                    <div className={"btn-width blue-link-btn"}>
                        Отправить
                    </div>
                </button>
            </div>
            <div className="center cancel-wrapper">
                <GreyLink to={'/'} text={"Отменить"} />
            </div>
        </form>
    );
}

export default reduxForm({
    form : "forgotPassword"
})(ForgotPasswordForm)
