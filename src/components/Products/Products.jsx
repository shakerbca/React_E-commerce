import React, { useState } from 'react'
import css from './Products-module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [parent] = useAutoAnimate()

const [MenuProducts, setMenuProducts ] = useState(ProductsData)

const filter = (type) => {
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
}
  return (
  <div className="s_container">
    <img src={Plane} alt="" />
    <h1>Our Featured Products</h1>

    <div className="products_p">
        <ul className="menu_m">
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>


        <div className="list_l" ref={parent}>
            {
                MenuProducts.map((product, i)=> (
                    <div className="product">
                        <div className="left-s">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Show Now</div>
                        </div>

                        <img src={product.img} alt="" className="img_p"/>
                    </div>
                ))
            }

        </div>
    </div>
  </div>
  );
};

export default Products;
