import '../main.css';

function Table() {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table-string">
          <th>Название</th>
          <th>
            <svg className="table__icon">
              <use xlinkHref="./sprite.svg#pencil"></use>
            </svg>
          </th>
          <th>Предложено</th>
          <th>0,9 т</th>
          <th>1,5 т</th>
          <th>3 т</th>
          <th>5 т</th>
          <th>10 т</th>
          <th>20 т</th>
          <th>Общий объем, м3</th>
          <th>В работе</th>
          <th>Нереализ.</th>
          <th>Вес, т</th>
          <th>Объем, м3</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table-string">
          <th>ООО "САМ-МБ"</th>
          <td>
            <img
              className="table__icon"
              src="./image/Ellipse.png"
              alt="ellipse"
            />
          </td>
          <td>35</td>
          <td></td>
          <td>1</td>
          <td></td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ГЛОБУС Ц</th>
          <td></td>
          <td>2</td>
          <td>1</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>Акмаева ИП</th>
          <td></td>
          <td>4</td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td>6</td>
          <td></td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Барков К.И.</th>
          <td>
            <img
              className="table__icon"
              src="./image/Ellipse.png"
              alt="ellipse"
            />
          </td>
          <td>1</td>
          <td></td>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td>4</td>
          <td></td>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Рогачков Александр Алексеевич</th>
          <td></td>
          <td>7</td>
          <td></td>
          <td>3</td>
          <td>4</td>
          <td></td>
          <td></td>
          <td>1</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Муравьев И.А.</th>
          <td>
            <img
              className="table__icon"
              src="./image/Ellipse.png"
              alt="ellipse"
            />
          </td>
          <td>8</td>
          <td></td>
          <td></td>
          <td>7</td>
          <td></td>
          <td></td>
          <td>7</td>
          <td></td>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ООО "ТЭК-Профи"</th>
          <td>
            <img
              className="table__icon"
              src="./image/Ellipse.png"
              alt="ellipse"
            />
          </td>
          <td>4</td>
          <td></td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>75,54</td>
          <td>17</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ООО ГРУМАНТ</th>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td>19</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Валяев В.А Трансп</th>
          <td></td>
          <td>9</td>
          <td>3</td>
          <td></td>
          <td></td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>20</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Довгуля А.Б.Транс</th>
          <td></td>
          <td>27</td>
          <td></td>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>104,6</td>
          <td>21</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Митусов Р.А.</th>
          <td></td>
          <td>5</td>
          <td></td>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>22</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Власов П.В.</th>
          <td></td>
          <td>0</td>
          <td>2</td>
          <td></td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>ИП Козлитин В.И.</th>
          <td></td>
          <td>56</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>РеалТрансКом ООО</th>
          <td>
            <img
              className="table__icon"
              src="./image/Ellipse.png"
              alt="ellipse"
            />
          </td>
          <td>12</td>
          <td></td>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="table-string">
          <th>Автоглобус</th>
          <td></td>
          <td>16</td>
          <td></td>
          <td></td>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tfoot className="table__foot">
        <tr className="table-string">
          <th>Итого</th>
          <td></td>
          <td>102ч</td>
          <td>19</td>
          <td>40</td>
          <td>27</td>
          <td>11</td>
          <td>1</td>
          <td>4</td>
          <td>2141,04</td>
          <td>81</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;