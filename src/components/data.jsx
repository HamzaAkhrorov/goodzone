import React from 'react'

function data() {
  return (
    function Cards() {
        const [data, setData] = useState([]);
        function getData() {
          fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setData(json));
        }
      
        useEffect(() => { 
          getData();
        }, []);
      
        console.log("datas", data);
        return (
          <div className="Cards">
            {data?.products?.map((i) => (
              <Card key={i.id} title={i.title} price={i.price} image={i.thumbnail}/>
            ))}
            
          </div>
        );
      }
  )
}

export default data