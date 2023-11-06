import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export default function ServiceCarousel({item}) {
    return (
        <OwlCarousel items={4} margin={30} autoplay={true}>
            {
                item?.map((element,index)=>{
                    return(
                        <div className={`service-card bg-${element.color} d-flex align-item-center p-5 mt-3 mb-4`} key={index}>
                            <div>
                            <h3 className='text-white fs-4 mb-4'>{element.title}</h3>
                            <p className="text-light">{element.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    )
}
