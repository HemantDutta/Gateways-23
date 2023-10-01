// Sanjay kandpal
import './About.css'
import { Footer } from '../components/Footer'
import EventDeatilsSideBar from '../components/EventDeatilsSideBar'
import { PublicNavbar } from '../components/PublicNavbar'

function AboutPage(){
    return(
        <>
            {/* Header */}
             <PublicNavbar active="events"/>
            {/* Header End */}
            <section className="about">
                <h2 className='about-heading'>About Gateways</h2>
                <div className='about-para'>
                    <div className='about-para-container'>
                        <p className='about-para-content'>Contrary to popular belief, Lorem Ipsum is not simply
                        random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur. from a Lorem Ipsum passage, and going through the cites of the word in Classical literature discovered the undoubtable source. Lorem Ipsum comes from sections 1.0.32 and 1.10.33 of.</p>
                    </div>
                    <div className='about-para-img-container'>
                        <img alt='' src='https://cdn.pixabay.com/photo/2020/10/28/17/32/spaceship-5694112_1280.jpg' className='about-img' />
                    </div>
                    <div className='about-para-container wd-100'>
                        <p className='about-para-content'>Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. looked up one of the more obscure Latin words. consectetur. from a Lorem ipsum passage. and going through the cites of the word in classical literature. discovered the undoubtable source. Lorem ipsum comes from</p>
                    </div>
                </div>   
            </section>
            {/*  Footer  */}
            <Footer active="home"/>
            {/*  Footer End  */}
        </>
    )
}

export default AboutPage