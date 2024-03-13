import './sliderpage.css'
import Header from '../components/header';
import Footer from '../components/footer';
import Swiper from './swiperpage'
import Cards from  './cardbackend'
import Slider from './slider'
import Bottomcards from './bottomcards'

function sliderpage() {
  return (
    <>
    <Header/>
    <div className="slider-container">
        <Swiper/>
        <div className="small-containers">
        <div className="small-sale-container">

        </div>
        <div className="small-sale-container2">
          
        </div>
        </div>
    </div>
    <p className='cotegory-name'>ПОПУЛЯРНЫЕ КАТЕГОРИИ</p>
    <div className="main-cotegory-container">
          <div className="cotegory-container1">
            <div className="cotegory-container1-items" >
            <p>Сьартфоны и гаджеты</p>
            <button>Смартфоны</button>
            <button>Телефоны</button>
            <br />
            <button>Планшеты</button>
            <button>Гаджеты</button>
            <button>Нфушники</button>
            <br />
            <button>Pawerbank</button>
            </div>
           
          </div>
          <div className="cotegory-container2">
            <p>Телевизор и аудио</p>
            <button>Телевизоры</button>
            <button>DVD-плеер</button>
            <button>Домашный кинотеатр и HI-FI техники</button>
          </div>
          <div className="cotegory-container3">
          <p>Техника для кухни</p>
            <button>холодилники</button>
            <br />
            <button>микроволные печки</button>
            <br />
            <button>Морозилники</button>
          </div>
          <div className="cotegory-container4">
            <p>Красота и здоровие</p>
            <button>Едектричуские бритвы</button>
            <br />
            <button>Триммеры</button>
            <br />
            <button>Машинки для стижки волос</button>
          </div>
          <div className="cotegory-container5">
            <p>Техники для дома</p>
            <button>Стиральные иашины</button>
            <br />
            <button>Пелисосы</button>
            <button>Кондиционеры</button>
          </div>
          <div className="cotegory-container6">
            <div className="cotegory-container1-items" >
            <p>Сьартфоны и гаджеты</p>
            <button>материскте рлаты</button>
            <button>Wifi-роутеры и модемы</button>
            <br />
            <button>каммукаторы</button>
            <button>Усилител сигнала и репитеры</button>
            <button>WI-FI адаптер</button>
            <button>HDD и SSD</button>
            </div>
          </div>
        </div>
        <Cards/>
        <Slider/>
        <Bottomcards/>
    <Footer/>
    </>
  )
}


export default sliderpage