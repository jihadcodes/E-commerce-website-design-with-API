import React, { useEffect, useState } from "react";
import explore from "../../assets/images/explore.png";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import axios from "axios";
import { Link, useParams } from "react-router";


const CategoryProducts = () => {
     const {slug} = useParams();


     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        axios
          .get(`https://dummyjson.com/products/category/${slug}`)
          .then((res) => setProducts(res.data.products));
      }, [slug]);
    
      const [visibleCount, setVisibleCount] = useState(4);
     
  return (
    <>
        <section>
        <div className="container border-b border-[rgba(0,0,0,0.25)] pb-[91px]">
          <div className="pb-[88px] pt-20 ">
            <h3 className="font-inter text-[36px] leading-12 font-semibold text-black">
              Explore Our Products: 
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pb-[76px]">
            {products.slice(0, visibleCount).map((product) => (
              <div key={product.id} className="product_item">
                <div className="bg-[#F5F5F5] p-[49px] rounded-sm">
                  <Link to={`/productdetails/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} />
                  </Link>
                </div>
                <h3 className="font-popins font-medium text-[16px] text-black leading-6 pt-4">
                  <Link to={`/productdetails/${product.id}`}>
                    {product.title}
                  </Link>
                </h3>
                <div className="flex gap-2 pt-2">
                  <p className="font-popins font-medium text-[16px] leading-6 flex gap-3">
                    <span className="text-[#DB4444]">
                      ${product.price.toFixed(2)}
                    </span>
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => {
                      const rating = product.rating;
                      const fullstar = Math.floor(rating);
                      const halfstar = rating - fullstar >= 0.5;
                      if (i < fullstar) {
                        return (
                          <TiStarFullOutline
                            key={i}
                            className="text-[20px] text-[#FFAD33]"
                          />
                        );
                      } else if (i === fullstar && halfstar) {
                        return (
                          <TiStarHalfOutline
                            key={i}
                            className="text-[20px] text-[#FFAD33]"
                          />
                        );
                      } else {
                        return (
                          <TiStarOutline
                            key={i}
                            className="text-[20px] text-[rgba(0,0,0,0.5)]"
                          />
                        );
                      }
                    })}
                  </div>
                  <span className="font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-[21px]">
                    ({product.reviews.length})
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            {visibleCount < products.length && (
              <button
                onClick={() => setVisibleCount(visibleCount + 8)}
                className="font-popins text-[#FAFAFA] text-[16px] leading-6 font-medium bg-[#DB4444] select-none cursor-pointer py-4 px-12 rounded-sm"
              >
                View More Products
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryProducts
