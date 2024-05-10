
import ProdCard from '../components/homePage/ProdCard';
import useFetch from '../hook/useFetch';
import { useEffect, useRef, useState } from 'react';
import './styles2/homePage.css';
import FilterPrice from '../components/homePage/FilterPrice';
import FilterCategory from '../components/homePage/FilterCategory';

const body = document.querySelector('body');

const HomePage = () => {
  const [products, getProducts] = useFetch();
  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState('')
  const [prodPrice, setProdPrice] = useState({
    from:0,
    to: Infinity
  });
  
  const textInput = useRef();
  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
    getProducts(url)
}, []);


const handleChange = () => {
  setProdName(textInput.current.value.toLowerCase().trim());
};

const prodfilters = (prod) => {
  const perName = prod.title.toLowerCase().includes(prodName);
  const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from;
  const perCategory = prodCategory ? prod.categoryId === +prodCategory : prod;
  return perName && perPrice && perCategory;
};

const handleDark = () => {
body.classList.toggle("dark");
};

  return (
  <div className='homepage'>
    <div className='homepage_filters'>
      <div className='homepage_filtername'>
        <input ref={textInput} onChange={handleChange} type="text" />
        <button>🔍</button>
      </div>
              <FilterPrice
                  setProdPrice= {setProdPrice}
              />
              <FilterCategory
                setProdCategory={setProdCategory}
              />
        <button className='homepage_btn' onClick={handleDark}></button>
    </div> 
    <div className='homepage_container'>
  {
        products?.filter(prodfilters).map((prod) => (
              <ProdCard
              key={prod.id}
              prod={prod}
              />
        ))
  }
  </div>
</div>
  )
}

export default HomePage