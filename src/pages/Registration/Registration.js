import {Header} from "../../components/Header/Header";
import {EnterVia} from "../../components/EnterVia/EnterVia";
import RegForm from "../../forms/RegForm/RegForm";
import { useHistory } from 'react-router-dom'
import './registration.scss';


export const Registration = props => {

    let history = useHistory();

    const onSubmitReg = () => {
        let values = props.store.getState().form.reg.values;

        history.push({
            pathname: '/confirm',
            search: `?name=${values.name}`
        });
    }

    return (
        <div>
            <Header page={'reg'} />
            <div className="center">
                <div className="column reg-wrapper">
                    <div className={"reg-big-title center"}>
                        Регистрация
                    </div>
                    <div className="center grey-text reg-and-get flex-wrap">
                        <div>Зарегистрируйся и получи доступ</div>
                        <div>&nbsp;к аналитике аккаунтов.</div>
                    </div>
                    <EnterVia />
                    <div className={"center reg-text-padding-or grey-text"}>
                        Или
                    </div>
                    <RegForm onSubmit={onSubmitReg} />
                </div>
            </div>
        </div>
    );
}
