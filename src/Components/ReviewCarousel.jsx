import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export default function ReviewCarousel({ item }) {
    return (
        <OwlCarousel items={2} margin={30} autoplay={true} >
            {
                item?.map((element, index) => {
                    return (
                        <div className={`review-card d-flex align-item-center p-5 mt-3 mb-4`} key={index}>
                            <div>
                                <p className='fs-4 mb-0'>{element.title}</p>
                                <span className='text-warning d-block mb-3'>
                                    <i className='fa fa-star pe-1'></i>
                                    <i className='fa fa-star pe-1'></i>
                                    <i className='fa fa-star pe-1'></i>
                                    <i className='fa fa-star pe-1'></i>
                                    <i className='fa fa-star pe-1'></i>
                                </span>
                                <p className="">{element.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    )
}
