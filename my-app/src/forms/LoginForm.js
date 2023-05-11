import '../main.css';


function LoginForm({email, emailHandler, password, passwordHandler, moveToAdminPanel}) {
  return (
      <section className="start-page section">
        <div className="start-page__container container">
          <div className="content">
            <div className="content__logo">
              <img src="./image/Logo.png" className="logo" alt="logo" />
            </div>
            <div className="content__banner">
              <h1 className="content__banner--caption">Личный кабинет</h1>
              <p className="content__banner--text">Для входа заполните форму.</p>
            </div>
            <div className="content__enter-form">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Электронная почта</label>
                  <input value={email} onChange={emailHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="remizova.us@svravto.ru" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Пароль</label>
                  <input value={password} onChange={passwordHandler} type="password" className="form-control" id="exampleInputPassword1" placeholder="****************" />
                </div>
                <button onClick={moveToAdminPanel} className="btn btn-primary">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default LoginForm;
