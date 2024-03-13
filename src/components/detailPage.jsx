
import Carusel from './caruselswiper'
import Heart from '../pages/heartbutton'
import './detailPage.css'
function detailPage() {
  return (
    <>
    <div className="main-view-container">
    <div className="product-view">
      <div className="product-view-top">
      <Carusel/>
      </div>
        <div className="product-view-centre">
          <p style={{color:'#9c9a99'}}>В изрбранное</p><br />
          <h4 style={{fontSize:25, }}>Сумка рюккзак HP Commuer <br />Backpack 15.6 Black (5EE91AA)</h4><br />
          <h1>Характиристики</h1>
          <p style={{fontSize:20}}>
            Тип <br />
            рюкзак<br />
            Максимальный размер экрана<br />
            156"<br />
            Материал<br />
            синтетический (полиэстер) <br />
            Внешние отделения<br />
            есть<br />
            Количество внутренних отделений<br />
            1 <br />
            Комплектация... <br />
          </p>
          <p style={{color:'#e41c38'}}>Читать дальше</p>
        </div>
        
          <div className="price-box">
            <h1>439 400 сум</h1>
            <button>Добави в корзинку</button>
          </div>
        
    </div>
    <div className="tab"><button>Описание</button></div>
    <div className="product-panel">
          
          <h1>Характиристики</h1>
          <p style={{fontSize:20}}>
            Тип <br />
            рюкзак<br />
            Максимальный размер экрана<br />
            156"<br />
            Материал<br />
            синтетический (полиэстер) <br />
            Внешние отделения<br />
            есть<br />
            Количество внутренних отделений<br />
            1 <br />
            Комплектация... <br />
          </p>
          <p style={{color:'#e41c38'}}>Читать дальше</p>
    </div>
    </div>
    </>
  )
}

export default detailPage