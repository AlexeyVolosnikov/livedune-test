// регулярное выражение для валидации майла при авторизации
export const mailValidation = mail => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail) ? "E-mail введен некорректно" : undefined)

// регулярное выражение для валидации майла при регистрации (текст ответа другой)
export const politeMailValidation = mail =>  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail) ? "Возможно вы ошиблись в указании почтового сервиса" : undefined)

// пустота поля
export const notEmpty = value => (value || typeof value === 'number' ? undefined : 'Поле не может быть пустым')

// разрешенные по ТЗ логин и пароль
export const account = {
    login : "example@example.com",
    pwd : "password2021"
}
