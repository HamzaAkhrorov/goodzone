import './bottomcards.css'
import Heart from './heartbutton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function bottomcards() {
  return (
    <>
     <div className="card-box">
    <div className="card2" >

    </div>
    <div className="card">
        <div className="card-top"><Heart/>
            <img src="https://cdn.goodzone.uz/goodzone/5acf0053-3123-4677-b33c-59fc81ab121c" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Встраиваемая</button>
            <p className='card-bottom-p'>Встраиваемая варочная панель <br /> GOODWELL GWP62652X</p>
            <strong>2 795 000 сум</strong>
            <p>от <span>349 375 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-top"><Heart/>
        <img src="https://cdn.goodzone.uz/goodzone/316f42d9-668d-4b1e-b355-ce2cf01e021a" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Встраиваемая</button>
            <p className='card-bottom-p'>Встраиваемая варочная панель <br /> GOODWELL GWP63161X</p>
            <strong>2 925 000 сум</strong>
            <p>от <span>365 625 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-top"><Heart/>  
        <img src="https://cdn.goodzone.uz/goodzone/0e605d11-50e6-4880-abf0-ae3ffb38e486" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Встраиваемая</button>
            <p className='card-bottom-p'>Встраиваемая варочная панель <br /> GOODWELL GWP6484 RI</p>
            <strong>3 185 000 сум</strong>
            <p>от <span>398 125 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default bottomcards