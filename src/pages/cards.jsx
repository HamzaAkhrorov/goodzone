import React from 'react'
import './cards.css'
import Heart from './heartbutton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function cards({title, image, price}) {
  return (
    <>
    <div className="main-box">
    <p>НОВИНКИ</p>
    <div className="first-card-box">
    <div className="card">
        <div className="card-top"><Heart/>
        <img src={image} alt="" />
        </div>
        <div className="card-bottom">
            <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    {/* <div className="card">
        <div className="card-top"><Heart/>
        <img src="https://cdn.goodzone.uz/goodzone/6fc3e7f7-4850-4ff4-a16d-b682dc8ce897" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/5dfdbb5f-2b89-4377-96ef-d59dde547cbe" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/e5be0aab-debf-43ff-af35-e8ef953eaca4" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div> */}
    </div>
    {/* <p>СКИДКИ</p>
    <div className="second-card-box">
    <div className="card">
        <div className="card-top"><Heart/>
        <img src="https://cdn.goodzone.uz/goodzone/b69dd776-77b2-47c4-a7fb-992b1e3a2d9d" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/ab71bb6d-947a-4a5f-805b-2b87ff0ebf45" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/c3d2b4d6-5d6e-4e94-885d-9fde7c6ebb9f" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/213a06d0-8924-4706-86e7-7a4c1e089993" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    </div>
    <p>ПОПУЛЯРНЫЕ ТОВАРЫ</p>
    <div className="third-card-box">
    <div className="card">
        <div className="card-top"><Heart/>
        <img src="https://cdn.goodzone.uz/goodzone/1f948397-0472-460b-8b03-c4a4ec6a861b" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/a8c6f95c-8bbe-4705-b2b5-01b787df4ce2" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/5e0f322e-4dcd-4477-b8a8-201adbf3cb53" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/c0c97d6c-d52c-4edb-9107-d51915879cd6" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    </div>
    <div className="fours-card-box">
    <div className="card">
        <div className="card-top"><Heart/>
        <img src="https://cdn.goodzone.uz/goodzone/3a6e8996-f5ea-4e4f-8d73-b8a364555d01" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/5ada6d7f-2ac3-4c45-99fb-5c2806074311" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/7ec03994-6b12-4b9a-83b4-bb1976bbab50" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
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
        <img src="https://cdn.goodzone.uz/goodzone/ed8842be-45c0-4924-a2ec-98df988f57cc" alt="" />
        </div>
        <div className="card-bottom">
        <button   className='card-bottom-button'>Кулер</button>
            <p className='card-bottom-p'>Кулер для воды BOSCH <br /> RDW1575</p>
            <strong>4 303 000 сум</strong>
            <p>от <span>537 875 cум</span></p>
            <div className="button">
            <button className='card-bottom-button2'>Купит сейчас</button>
            <div className="icon">
            <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </div>
    </div> */}
    </div>
    </>
  )
}

export default cards