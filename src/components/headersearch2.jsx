import { useEffect, useState } from "react";
import "./headersearch2.css";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { FaOpencart } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// let menu = [
//   {
//     id: 1,
//     name: "Smartphone va gadget",
//     icon: <MdPhoneAndroid />,
//     subminu: [
//       { id: 1, name: "Smartfon" },
//       { id: 2, name: "Telefon" },
//       { id: 3, name: "Planshit" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Televizor va audio",
//     subminu: [
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Texnika dlya kuxniy",
//     subminu: [
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//     ],
//   },
// ];
function SearchProduct({ image, title }) {
  return (
    <>
      <div className="search-product">
        <img src={image} alt="" width={60} />
        <p>{title}</p>
      </div>
    </>
  );
}
function Header() {
  const [ochil, setOchil] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  function opens() {
    setOchil(!ochil);
  }
  function getSearch() {
    if (value != "") {
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((r) => setData(r));
    }
  }
  useEffect(() => {
    getSearch();
  }, [value]);
  console.log(data?.products);
  return (
    <div className="header">
      <button
        onClick={opens}
        style={{
          backgroundColor: ochil ? " rgba(232, 123, 123,.3)" : "rgb(207, 5, 5)",
          color: ochil ? "red" : "#fff",
        }}
      >
        {ochil ? (
          <span>
            <MdOutlineClose fontSize={14} />
          </span>
        ) : (
          <span>
            <FiMenu fontSize={14} />
          </span>
        )}
        Kategoriya
      </button>
      <div className="input-search">
        <input
          type="text"
          placeholder="Qidirish"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="search-icon">
          {" "}
          <CiSearch />
          {value != "" ? (
            <div className="input-block">
              {data?.products?.length > 0 ? (
                <>
                  {" "}
                  <div className="input-box">
                    {data?.products?.slice(0, 3)?.map((item) => {
                      return (
                        <SearchProduct
                          key={item.id}
                          title={item.title}
                          image={item.thumbnail}
                        />
                      );
                    })}
                    <a style={{ color: "black", textDecoration:'none' }} href="#">
                      Kuproq kurish
                    </a>
                  </div>
                </>
              ) : (
                <h1 style={{ color: "black" }}>Product topilmadi</h1>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="icons">
        <div className="icon-head">
          <FavoriteBorderIcon />
        </div>
        <div className="icon-head">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width:25}}><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
        </div>
      </div>

      {ochil ? (
        <div className="container-menu">
          <div className="container-grid">
            <ul>
              <li>
                <MdPhoneAndroid />
                <span>Smartfon va gadjetlar</span>
                <MdArrowForwardIos />
              </li>
              <li>
                <MdPhoneAndroid />
                <span>Smartfon va gadjetlar</span>
                <MdArrowForwardIos />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;