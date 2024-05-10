import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import PurchaseCard from '../components/purchases/PurchaseCard';
import './styles2/purchases.css';

const Purchase = () => {

  const purchases = useSelector(store => store.purchases);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getPurchasesThunk());
  }, []);
  




  return (
    <div className='purchases'>
      {
        purchases.map(prod => (
          <PurchaseCard
          key={prod.id}
          prod={prod}
          />
        ))
      }
    </div>
  )
}

export default Purchase