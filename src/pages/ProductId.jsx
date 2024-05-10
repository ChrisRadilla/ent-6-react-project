import React from 'react';
import{ useParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import { useEffect } from 'react';
import ProdInfo from '../components/prodid/ProdInfo';
import './styles2/prodid.css';
import ProdSlider from '../components/prodid/ProdSlider';
import ProdSimilar from '../components/prodid/ProdSimilar';

const ProductId = () => {

const [product, getProduct] = useFetch();

const params = useParams();

useEffect(() => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`;
getProduct(url)
}, [params.id]);
 
  return (
    <section className='prodid'>
      <ProdSlider
      product={product}
      />
      <ProdInfo
      product={product}
      />
      <ProdSimilar
        product={product}
        
        />
    
      </section>
  )
}
export default ProductId     
