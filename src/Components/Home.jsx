import React from 'react'
import ServiceCarousel from './ServiceCarousel'
import FaqsAccordion from './FaqsAccordion'
import ReviewCarousel from './ReviewCarousel'
import { Link } from 'react-router-dom'


export default function Home() {
    const Service = [{
        color: "danger",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tQuisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        color: "primary",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consiam obcaecati quibusdam voluptatum illum magnam animi. Quisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        color: "success",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam animi. Quisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus !"
    },
    {
        color: "warning",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam tium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        color: "info",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam animi. Quisqua id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        color: "dark",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illuam vitae accusamus vel magnam delectus eos adipisci!"
    }]
    const faqs=[{
        key:"one",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tQuisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        key:"two",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consiam obcaecati quibusdam voluptatum illum magnam animi. Quisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        key:"three",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam animi. Quisquam, rem commodi natus cumque ipsa laudantium id dignissimos, nostrum ipsam vitae accusamus !"
    },
    {
        key:"four",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam tium id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    },
    {
        key:"five",
        title: "lorem ipsum dolar",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia eaque eveniet tempore laboriosam laborum, aperiam obcaecati quibusdam voluptatum illum magnam animi. Quisqua id dignissimos, nostrum ipsam vitae accusamus vel magnam delectus eos adipisci!"
    }]
    const reviews=[{
        title:"Ashely",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique odit expedita pariatur modi vitae!"
    },
    {
        title:"Adam",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique odit expedita pariatur modi vitae!"
    },]
    
    return (
        <main class="my-5">
            <div class="container pb-5">
                <div class="row pb-lg-5">
                    <div class="col-lg-6">
                        <h1 class="fw-bold align-middle font-orange display-4 pt-5"><u>Professional Writing Service</u></h1>
                        <p class="font-cursive display-6 pb-5">to take your goal to the next level</p>
                        <div className="d-flex align-items-center justify-content-around">
                            <div>
                                <Link to="" class="primary-btn py-2 px-4 fs-5 rounded-pill">Get Started</Link>
                            </div>
                            <img src="./assets/img/flyer.webp" width="150px" class="flyer" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6 position-relative">
                        <img src="./assets/img/gradient.webp" class="gradient-1" alt="" />
                    </div>
                </div>
            </div>
            
            {/* Social Proofs */}
            <div className="container-fluid social-proof px-5 my-5 py-5">
                <div className="container pb-5">
                    <h2 className='text-center fw-semibold fs-1 mb-5'>Our Ratings</h2>
                    <div className="row row-cols-1 row-cols-lg-4 g-2 ">
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.4</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">1678 Reviews</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/google.webp" width={120} className='mx-auto' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.7</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">1154 Reviews</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/trustpilot.svg" width={120} height={50} className='mx-auto' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.3</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">443 Reviews</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/sitejabber.svg" width={140} height={50} className='py-2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.8</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">723 Reviews</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/goodfirms.svg" width={140} height={50} className='py-2' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <div class="mt-5 pb-5">
                <div className="container">
                    <h2 class="fs-1 fw-600 primary-text mb-5">Lorem ipsum dolor sit.</h2>
                </div>
                <div className="container-xxl benefits mb-5">
                    <div className="row row-cols-1 row-cols-lg-3 g-3">
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon1.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon2.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon3.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon4.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon5.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon6.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Lorem, ipsum.</h3>
                                    <p className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita ullam fugit eius facere totam optio est illo deleniti. Cumque?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 */}
            <div class="mt-5 pb-5">
                <div className="container">
                    <h2 class="fs-1 fw-600 primary-text">Lorem ipsum dolor sit.</h2>
                </div>
                <div className="process-container d-flex align-items-center">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-3 g-5">
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>1. Lorem, ipsum dolor.</h3>
                                    <p className='ps-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio accusamus enim aspernatur possimus asperiores eveniet porro velit quae esse eos, dolore culpa nulla illum voluptas. Ab, ut esse delectus inventore consequatur et similique architecto unde harum molestiae, tempora dicta aut.</p>
                                </div>
                            </div>
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>2. Lorem, ipsum dolor.</h3>
                                    <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim repellat provident possimus quidem asperiores quo explicabo rerum perspiciatis? Sapiente soluta eum debitis tempore minima, vitae exercitationem suscipit ipsum voluptate.</p>
                                </div>
                            </div>
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>3. Lorem, ipsum dolor.</h3>
                                    <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni dolorum distinctio architecto repudiandae nisi iure quod ratione totam voluptates voluptatibus quasi, odio quis illo qui nemo maxime quae perspiciatis. Laudantium quo aut laborum ipsam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}

            <div className="pb-5">
                <div className="container">
                    <h2 className='fs-1 fw-semibold mb-5'>Lorem, ipsum.</h2>
                    <div className="container-fluid ">
                        <ServiceCarousel item={Service} />
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Lorem, ipsum dolor.</h2>
                <div className="row g-5">
                    <div className="col-lg-4 p-4">
                        <img src="./assets/img/faqs.webp" alt="" />
                    </div>
                    <div className="col-lg-8 my-auto pt-5">
                        <FaqsAccordion data={faqs}/>
                    </div>
                </div>
            </div>

            <div className="reviews-container pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src="./assets/img/reviews.svg" alt="" />
                        </div>
                        <div className="col-lg-7 my-auto">
                            <h2 className='ps-0 ps-lg-4 my-4 fs-1'>Check What Our Client Says</h2>
                            <ReviewCarousel item={reviews}/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
