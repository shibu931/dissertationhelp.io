import React from 'react'

export default function Footer() {
    return (
        <footer>
            <hr class="text-light bg-light" />
            <div class="container pt-3">
                <div class="row">
                    <div class="col-md-4">
                        <img src="./assets/img/dissertationhelp-logo-white-svg.svg" className='mb-2' alt="Dissertation Help" loading='lazy'/>
                        <h3 className='text-white fs-6 fw-200'>Dissertation Help That Will Sift Away Your Academic Troubles!</h3>
                    </div>
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-4" id='contact'>
                        <h3 class="text-light">Contact</h3>
                        <ul class="list-unstyled">
                            <li><a href="tel:+447418343403" class="text-light text-decoration-none"><i class="fa-solid fa-phone"></i> +44 7418 343403</a></li>
                            <li><a href="mailto:info@dissertationhelp.io" class="text-light text-decoration-none"><i class="fa-regular fa-envelope"></i> info@dissertationhelp.io</a></li>
                            <li><a  class="text-light text-decoration-none"><i class="fa-solid fa-location-dot"></i> 148 Broadhurst Gardens, London, UK - NW63BH</a></li>
                            <li class="my-3">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="text-light bg-light mb-1" />
            <h2 class="text-light text-center mb-0 pb-2 py-2 fs-5 mb-4">Copyright &#169; 2010-2023 | Dissertationhelp.io | All rights reserved</h2>
            <p className='text-center text-white mb-0 pb-4 container'><strong>Disclaimer</strong> Dissertationhelp.io provides academic materials, including assignments, essays, research papers, and presentations, for reference purposes only. We do not endorse plagiarism. Users are expected to utilize these resources solely for their writing endeavours</p>
        </footer>
    )
}
