import '../main.css';
import Menu from '../forms_elements/Menu';
import Table from '../forms_elements/Table';


function AdminPanel({email}) {
  return (
        <section className="main-section section">
          <div className="container">
            <div className="main-page">
              <Menu />
              <div className="header">
                <div className="account">
                  <img src="../image/Notification.png" className="account__message" alt="message" />
                  <div className="account__persona">
                    <img src="./image/pers-icon.png" className="account__persona--icon" alt="icon" />
                    <div className="account__pesrona--desc">
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-content">
                <div className="table__header">
                  <div className="timeset">
                    <button className="btn--table timeset__calendar">
                      <svg className="timeset__icon">
                        <use xlinkHref="./sprite.svg#calendar"></use>
                      </svg>
                    </button>
                    <button className="btn--table timeset__date">19.01.2023</button>
                    <button className="btn--table timeset__day">Четверг</button>
                    <button className="btn--table timeset__reload">
                      <img src="./image/Reload.png" className="timeset__icon" alt="reload-icon" />
                    </button>
                  </div>
                  <div className="tableset">
                    <button className="btn--table tableset__coll">
                      <img src="./image/columns.png" className="tableset__icon" alt="download-icon" />
                    </button>
                    <button className="btn--table tableset__coll">
                      <h3 className="tableset__text">Столбцы</h3>
                    </button>
                    <button className="btn--table tableset__download">
                      <img src="./image/download.png" className="tableset__icon" alt="download-icon" />
                    </button>
                    <button className="btn--table tableset__download">
                      <h3 className="tableset__text">Скачать</h3>
                    </button>
                  </div>
                </div>
                <Table />
              </div>
            </div>
          </div>
        </section>
  );
}

export default AdminPanel;
