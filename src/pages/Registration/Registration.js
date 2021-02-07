import {Header} from "../../components/Header/Header";
import {EnterVia} from "../../components/EnterVia/EnterVia";
import RegForm from "../../forms/RegForm/RegForm";
import { useHistory } from 'react-router-dom'
import './registration.scss';

const styles = {
    auth : {
        padding: "40px 0 0 0"
    }
}

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
                <div className="column" style={styles.auth}>
                    <div className={"big-title center"}>
                        Регистрация
                    </div>
                    <div className="center text-padding grey-text flex-wrap">
                        <div>Зарегистрируйся и получи доступ</div>
                        <div>&nbsp;к аналитике аккаунтов.</div>
                    </div>
                    <EnterVia />
                    <div className={"center text-padding-or grey-text"}>
                        Или
                    </div>
                    <RegForm onSubmit={onSubmitReg} />
                </div>
            </div>
        </div>
    );
}
