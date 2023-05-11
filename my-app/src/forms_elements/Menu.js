import '../main.css';

function Menu () {
  return (
    <nav className="menu">
      <div className="menu__logo">
        <img src="./image/Logo.png" className="logo" alt="logo" />
      </div>
      <ul className="menu__list menu__list-main">
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Home.png"
              alt="home-page"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Главное</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Event.png"
              alt="event"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">События</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Supply.png"
              alt="supply"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Подачи</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Stuff.png"
              alt="stuff"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Сотрудники</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Waybill.png"
              alt="waybill"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Путевые листы</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Agreement.png"
              alt="agreement"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Согласование</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Tender.png"
              alt="tender"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Тендер</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Routing.png"
              alt="route"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Маршрутизация</h3>
          </a>
        </li>
      </ul>
      <ul className="memu__list menu__list-admin">
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/PowerBI.png"
              alt="powerBI"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Power BI</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <img
              src="./image/Streamlit.png"
              alt="streamlit"
              className="menu__item--icon"
            />
            <h3 className="menu__item--caption">Streamlit</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <svg className="menu__item--icon">
              <use xlinkHref="./sprite.svg#admin-line"></use>
            </svg>
            <h3 className="menu__item--caption">Админ панель</h3>
          </a>
        </li>
      </ul>
      <ul className="menu__list menu__list-contacts">
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <svg className="menu__item--icon">
              <use xlinkHref="sprite.svg#phone"></use>
            </svg>
            <h3 className="menu__item--caption">Контакты</h3>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item--link">
            <svg className="menu__item--icon">
              <use xlinkHref="./sprite.svg#support"></use>
            </svg>
            <h3 className="menu__item--caption">Техподдержка</h3>
          </a>
        </li>
      </ul>
      <div className="menu__close">
        <svg className="menu__close-elem">
          <use xlinkHref="./sprite.svg#menu-close"></use>
        </svg>
      </div>
    </nav>
  );
}

export default Menu;