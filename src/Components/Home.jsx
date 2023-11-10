import React from 'react'
import ServiceCarousel from './ServiceCarousel'
import FaqsAccordion from './FaqsAccordion'
import ReviewCarousel from './ReviewCarousel'
import { Link } from 'react-router-dom'


export default function Home() {
    const Service = [{
        color: "danger",
        title: "Undergraduate Dissertation Help",
        content: "With the overwhelming experience of undergraduate studies, a dissertation is something that can take a toll on your mental health. For students looking for an answer to “Can someone help me with my dissertation”, our experts are here for you."
    },
    {
        color: "primary",
        title: "Masters Dissertation Help",
        content: "Master's dissertation can become highly stressful especially when it's the end of the semester and there is a lot on your mind. If you are looking for someone to save you from the stress, our professional dissertation writers are here to provide the help you need."
    },
    {
        color: "success",
        title: "Proofreading ",
        content: "Dissertations help but, want someone to give you a heads-up to make the submission? Our dissertation editing help can look over your work and suggest you the required changes. If you want to us edit, we are thrilled to do that too."
    },
    {
        color: "warning",
        title: "Ph.D. Dissertation Help",
        content: "Ph.D. dissertation requires massive research and the application of critical thinking skills. Our dissertation help experts can provide you with the best solutions to solve your problems. All you have to do is choose your subject and raise a request!"
    },
    {
        color: "info",
        title: "MBA Dissertation Help",
        content: "With experts who possess the knowledge and the skills to fulfil your dissertation requirements, Dissertation Online Help can assist you with your MBA dissertations even if there is less time to make the submissions."
    },
    {
        color: "dark",
        title: "Chapter Wise Dissertation Help",
        content: "If your mind is stuck on a particular chapter and the writer's block is sitting your head way too hard, there is nothing to worry about! We will provide you with the best dissertation writing help from wherever you want us to begin."
    },
    {
        color: "danger",
        title: "Dissertation Tutor Help",
        content: "Can't find the right answer to “I need help with my dissertation”? Your search is now over as our Dissertation helpers are highly experienced to tutor you on how to write yourself! So, if you want to apply DIY but need a little assistance, we are here for you!"
    },
    {
        color: "primary",
        title: "Formatting",
        content: "Confused with the formatting of your dissertation? Being the best dissertation help online, we possess the ability and skills to prepare a well-structured document for a perfect submission. All you need to do is reach out to us today!"
    }]
    const faqs = [{
        key: "one",
        title: "Can I Hire Someone To Write My Dissertation?",
        content: "Yes, you can hire an expert dissertation help website to receive quality dissertations at affordable prices. Websites like Dissertation Help can be of utmost help especially when you are looking for someone to fully take care of full dissertation writing services."
    },
    {
        key: "two",
        title: "How Much Does The Dissertation Writing Service Cost?",
        content: "Dissertation writing services charge differently depending on the type of order and requirements. If you are looking for someone to write a full dissertation right from the beginning till the end then, the approximate price will be $10 - $15 per page. To know in detail prices, reach out to Dissertation Help today!"
    },
    {
        key: "three",
        title: "How Do You Write A Good Doctoral Dissertation?",
        content: "Writing a good doctoral dissertation requires well-structured information along with emphasis on research. If research is not your cup of tea then, seek assistance from the best doctoral dissertation help service today!"
    },
    {
        key: "four",
        title: "What Is The Benefit Of A Dissertation?",
        content: "A dissertation is a detailed study on a subject or topic that requires extreme hard work and dedication. Writing and editing a dissertation develops critical thinking skills in dissertation writer as they have to analyze and evaluate a large amount of data and utilize them into a coherent and meaningful conclusion."
    },
    {
        key: "five",
        title: "What Is A Dissertation Writing Service?",
        content: "A dissertation writing service plays an important part in obtaining a degree whether it is a graduate, post-graduate, or doctorate. The dissertation experts assist with complete dissertation writing, parts of the dissertation or just formatting the dissertation."
    }]
    const reviews = [{
        title: "Ashely",
        content: "I wanted help with my dissertation and after a thorough research, I decided to go with Dissertation Help. Although it was my first encounter with a dissertation help service, I was pretty much satisfied with what I received. Got distinction grades as well."
    },
    {
        title: "Adam",
        content: "My deadline to submit my Ph.D. dissertation was 2 weeks away and due to a family emergency, I was very worried if I could make it to the submission. Then, I found Dissertation Help! They were exactly what they claimed, the best blend of expertise and experience. I think I will choose them again when I need help with my dissertation."
    },
    {
        title: "Emma",
        content: "I was searching for my options for online dissertation writing help as I was struggling to work on my psychology dissertation for quite some time. I got to know about Dissertation Help from a friend and am quite glad that I found a reliable source. I have been through fraud before but, dissertation help made sure to take care of my insecurities! Thanks, Dissertation Help!"
    },
    {
        title: "Mickey",
        content: "Took educational dissertational help a few months back and the results finally came out today! They did a great job and I got an A+ remark from my professor. Because of this submission, I was further selected for a competition. Now thinking of taking dissertation tutor help from them as well!"
    },
    {
        title: "Sophie",
        content: "I was stuck with a dissertation topic that I was unable to comprehend. I looked for the best dissertation writing service online and came across this website. The dissertation experts completed my dissertation and even revised it numerous times whenever I had any confusion. Hats off to your services!!!"
    },
    {
        title: "Michale",
        content: "I needed to get good grades for better job opportunities in the future but the dissertation seemed to be a hurdle for me as I had to focus on other academic domains too. I googled for the top dissertation help online and found this amazing website. They provided me with the best dissertation writer and finally I passed with flying colours. Thank you for the best dissertation help."
    },]
    const data = [{
        content: "Gain Knowledge & Expertise"
    },
    {
        content: "Quality Dissertation"
    },
    {
        content: "Save Time"
    },
    {
        content: "Make Submission Before Deadline"
    },
    {
        content: "Improved Grades"
    },
    {
        content: "Zero Stress"
    }]
    const services2 = ["Law ","Nursing","Economics","Finance","Psychology","Statistics","Accounting","Anthropology","Architecture","Biomedical Science","Business","Chemistry","Civil engineering","Computer Science","Data analysis","English","Fashion","Geography","Healthcare"]
    return (
        <main class="my-5">
            <div class="container pb-5">
                <div class="row pb-lg-5">
                    <div class="col-lg-6">
                        <h1 class="fw-bold align-middle font-orange display-5 pt-5">Dissertation Help That Will Sift Away Your Academic Troubles!</h1>
                        <p class="font-cursive pb-5">Feeling overwhelmed with your upcoming dissertation submissions? With Dissertation Help by your side, there is nothing to worry about anymore! Our exclusive help with dissertation services are specifically curated to help you out for urgent requirements especially when the deadline is just a few weeks away. So, don't stress out, ask for online dissertation help today!</p>
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
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-2 ">
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.8/5</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">5000+ Students</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/google.webp" width={120} className='mx-auto' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>5/5</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">1000+ Students</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/trustpilot.svg" width={120} height={50} className='mx-auto' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.9/5</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">1500+ Students</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/sitejabber.svg" width={140} height={50} className='py-2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.9/5</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">500+ Students</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/capterra.svg" width={140} height={50} className='py-2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rating-card p-2 p-lg-4">
                                <p className='fs-1 fw-normal text-center mb-1'>4.7/5</p>
                                <p className='text-warning text-center'>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                    <span><i className='fa fa-star'></i></span>
                                </p>
                                <p className="text-center">800+ Students</p>
                                <hr />
                                <div className="text-center">
                                    <img src="./assets/img/reviewcenter.svg" width={140} height={50} className='py-2' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <div class="mt-5 pb-5">
                <div className="container">
                    <h2 class="fs-1 fw-600 primary-text mb-2">Our Dissertation Help Online Features</h2>
                    <p className='mb-3'>Our experts don't just provide help with dissertations, there are a lot many amenities you get to enjoy when you seek assistance from us.</p>
                </div>
                <div className="container-xxl benefits mb-5">
                    <div className="row row-cols-1 row-cols-lg-3 g-3">
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon1.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>24/7 Assistance</h3>
                                    <p className='fs-6 '>We understand that a student may need the help of reliable dissertation writing services at any time during the day. This is why we keep our help with dissertations window open 24/7! If you require instant dissertation help in the middle of the night, feel free to connect with our live chat feature and our experts will be there to take your requirements within minutes!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon2.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Custom Dissertation Help</h3>
                                    <p className='fs-6 '>Every individual is unique and so are their dissertation requirements. Keeping every perspective in mind, we serve our customers with an option to receive custom dissertation help according to their needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon3.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Urgent Dissertation Help</h3>
                                    <p className='fs-6 '>With the help of our excellent dissertation writers, you can now receive your requirements even on an urgent basis! If you are a few days away from your deadline, there is nothing to panic about. We will assign you the best dissertation writer so that you can relax while our experts speed up the dissertation writing process! </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon4.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>AI and Plagiarism Free Content</h3>
                                    <p className='fs-6 '>Our online dissertation help ensures to provide you with a quality dissertation that has been first-handly researched by our experts and freshly written by our writers. Hiring our Dissertation Help will provide you with 100% plagiarism and AI-free solutions even if your deadline is just a few days away!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="benefits-box">
                                <img src="./assets/img/icon5.png" width="180px" height="180px" alt="" />
                                <div className="benefits-content rounded-4 p-4 pt-5">
                                    <h3 className='fw-normal fs-4'>Free Revisions</h3>
                                    <p className='fs-6 '>Knowing that every individual has a different perspective, we understand that you might require a few changes after you have a look at the final draft created by our dissertation writer. To give you a stress free experience, we offer all our customers with a free unlimited revision feature! </p>
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
                    <h2 class="fs-1 fw-600 primary-text">How To Order Our Dissertation Help Service?</h2>
                    <p>Want to get dissertation writing help right away? Our 3-step easy to order process will take just 5 minutes for you to begin your journey to achieve success!</p>
                </div>
                <div className="process-container d-flex align-items-center">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-3 g-5">
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>1. Share Your Requirements</h3>
                                    <p className="ps-4">To get help with dissertation from Ph.D. experts, fill out the form and mention every detail you would like to care about while working on your dissertation, for example dissertation topic, deadline, etc.</p>
                                </div>
                            </div>
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>2. Make The Payment</h3>
                                    <p className="ps-4">Once you have provided us with all the details, the next step is to make the payment. Our Dissertation Help services assist all the customers and give them the option to pay through a payment mode they are comfortable with. </p>
                                </div>
                            </div>
                            <div className="col mt-0">
                                <div className="process-card p-4">
                                    <h3 className='mb-4'>3. Download Your Ready To Submit Solution</h3>
                                    <p className="ps-4">As soon as you initiate the payment, we are ready to process your order. Assigning the best available dissertation writer according to your requirements, we will ensure to provide a ready to download document via your registered email.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 */}
            <div className="container py-5">
                <h2 className='mb-5'>Why Choose Professional Dissertation Writing Help?</h2>
                <ul className='list-unstyled d-flex flex-wrap mb-5'>
                    {
                        data?.map((element, index) => (
                            <li className='benefits-list mx-3 ' key={index}>{element.content}</li>
                        ))
                    }
                </ul>
            </div>
            {/* Section 3 End */}

            {/* section 4 */}
            <div className="container">
                <div className="tab-section mb-4 pb-5 ">
                    <nav className="d-flex justify-content-center" data-wow-delay="0.3s">
                        <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                            role="tablist">
                            <button className="nav-link active" id="nav-SectionOne-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-SectionOne" type="button" role="tab"
                                aria-controls="nav-SectionOne" aria-selected="false">
                                <h2 className='fs-5'>When Do You Require Online Dissertation Help UK?</h2>
                            </button>

                            <button className="nav-link" id="nav-SectionTwo-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-SectionTwo" type="button" role="tab"
                                aria-controls="nav-SectionTwo" aria-selected="false">
                                <f2 className="fs-5">5 Reasons To Choose Our Online Dissertation help</f2>
                            </button>
                        </div>
                    </nav>

                    <div className="tab-content mt-5 wow fadeInRight" id="nav-tabContent" data-wow-delay="0.5s">
                        <div className="tab-pane fade show active" id="nav-SectionOne" role="tabpanel"
                            aria-labelledby="nav-SectionOne-tab">
                            <p>We provide Dissertation help online in case </p>
                            <ul>
                                <li>Not getting enough time for other tasks. Don't worry; seek help from our dissertation writing experts. We ensure that all your dissertation panic vanishes with our dissertation help online.</li>
                                <li>Is the lack of motivation not allowing you to work on a dissertation? With the best dissertation online help, get rid of all the dissertation worries.</li>
                                <li>Sometimes you aren't interested enough in your dissertations due to all the tiring work that needs to be done. Our Dissertation writer works hard to prepare the dissertations for you.</li>
                                <li>Sometimes you start with the dissertation and end up nowhere. Don't worry, our dissertation help expert will complete your dissertation from wherever you left off.</li>
                            </ul>
                            <p>Our dissertation writing service will ease the pressure from your shoulders and provide you with a sense of relief.</p>
                        </div>

                        <div className="tab-pane fade" id="nav-SectionTwo" role="tabpanel"
                            aria-labelledby="nav-SectionTwo-tab">
                            <ul>
                                <li>2500+ Ph.D. level dissertation experts who are well suited for the job.</li>
                                <li>More than 10,000+ students received our online dissertation help this year and we hope to double this amount in the years to come.</li>
                                <li>We prioritize 100% customer satisfaction. In the rare instance that you are not satisfied with the work done, our dissertation helpers provide unlimited revisions. </li>
                                <li>1500+ dissertations completed in a month by our dissertation expert and we look forward to increasing this number.</li>
                                <li>A user rating of 4.9 out of 5 based on 1000+ plus users of our dissertation help online is itself proof of how much you trust the amount of hard work and the resources we use to get the dissertations done on time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 4 End */}

            <div className="pb-5">
                <div className="container">
                    <h2 className='fs-1 fw-semibold mb-5'>What Do We Provide When You Ask Us to “Do My Dissertation”?</h2>
                    <div className="container-fluid ">
                        <ServiceCarousel item={Service} />
                    </div>
                </div>
            </div>

            <div className="container pb-5 mb-5">
                <h2 className='mb-3'>Subjects Our Dissertation Writing Services Have Catered To Before!</h2>
                <p className='fs-5'>We hire dissertation writers from within the field so that when you give us your order, we can provide personalized assistance in subjects like:</p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 gy-4 pt-5">
                {
                    services2?.map((element, index) => (
                        <div className="col">
                            <div className="services-card" key={index}>
                            <img src="./assets/img/right-arrow.png" alt="right arrow" />
                            <h3 className='ms-3 fs-5 fw-normal'>{element} dissertation help</h3>
                        </div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className="container">
                <h2>FAQs</h2>
                <div className="row g-5">
                    <div className="col-lg-4 p-4">
                        <img src="./assets/img/faqs.webp" alt="" />
                    </div>
                    <div className="col-lg-8 my-auto pt-5">
                        <FaqsAccordion data={faqs} />
                    </div>
                </div>
            </div>

            <div className="container my-5 py-4">
                <div className="gradient-box p-5">
                <h2 className='text-center mb-3'>Why Do We Call Our Dissertation Help Services Unique?</h2>
                <p className='text-center text-white fs-5 fw-200'>What makes our dissertation assignment help truly unique is the unwavering commitment of our experts to help you achieve success. The secret ingredient to our excellent assistance is personalized attention and a deep understanding of your requirements along with the inputs of our Ph.D. writers honing great experience and expertise. Our dissertation writing service not just writes for you or guides you towards the right path, they empower you to excel! This dedication and passion to help you grow and reach the doorstep of success without facing any hurdles is what sets us apart from other dissertation Help Services</p>
                </div>
            </div>

            <div className="container my-5 py-4">
                <h2>About Us</h2>
                <p>Our dissertation help has a trusted name in the dissertation writing industry. We have been delivering help with dissertation for more than a decade. The motive behind the establishment of our online dissertation help has always been helping students from different domains with excellent dissertation writing. We are a group of capable dissertation experts from different academic fields with excellent knowledge of the subject. We have 2500+ PhD-level dissertation writers who have helped 10000+ students in the past decade.</p>
                <p>Indeed, those are breathtaking numbers alright, and yet our online dissertation writing expert thinks there is more to be achieved. We have a competent team of dissertation writer that helps students, and in turn, makes finer work faster and more effective. For this purpose, we as a dissertation help shall emphasize technical excellence, applied science, and excellent client service as we strive to scale new heights that will surpass previous performance levels where we will execute our duties intensely and gracefully. Don’t worry; we will remain your trusted companion throughout your academic journey.</p>
            </div>

            <div className="reviews-container pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src="./assets/img/reviews.svg" alt="" />
                        </div>
                        <div className="col-lg-7 my-auto">
                            <h2 className='ps-0 ps-lg-4 my-4 fs-1'>Check What Our Client Says</h2>
                            <ReviewCarousel item={reviews} />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
