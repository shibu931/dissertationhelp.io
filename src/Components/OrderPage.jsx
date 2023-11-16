import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

export default function OrderPage() {
    return (
        <div class="container pb-5">
            <h1 className='text-center my-5 font-orange'>Create a order now &<br className='d-none d-lg-block'/> Get Exiciting discounts</h1>
            <div class="row pb-lg-5 justify-content-center">
                <div class="col-lg-12 position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <Form />
                        </div>
                    </div>
                    <img src="./assets/img/gradient.webp" class="gradient-1" loading='lazy' alt="gradient" />
                </div>
            </div>
        </div>
    )
}
