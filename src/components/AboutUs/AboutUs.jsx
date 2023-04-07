import './AboutUs.css'
import CardDeck from './CardDeck';
import ChooseUs from './ChooseUs';


const AboutUs = () => {
    return (
        <section>
            <div class="card-deck">
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Who Are We</h5>
                    <p class="card-text">
                        We focus on the major problems in trade, commerce and logistics and solve them using Australian management, and technology.
                        We think business in terms of systems. The better the system is the better the business is.
                        Our systems offer you a complete solution with predicable outcomes in record times. Give us your problems.
                        We use our systems i.e. the power of tech and good management to plan a predictable and consistent solution every time.
                    </p>
                </div>

            </div>
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Our Mission</h5>
                    <p class="card-text">
                        Everyday, more than 400 staff driven with CAN culture are out there at your service.
                        We believe prosperity comes from logistic, trade and ecommerce infrastructure.
                        We are marching towards CAN VISION™ 2030 and will establish branches in each of 753 municipalities,
                        reate 10,000 new jobs and facilitate trade and commerce by connecting 90% people through our massive network.
                        We dream big for the good of country and we have a clear plan.
                    </p>
                </div>

            </div>
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">What We Do</h5>
                    <p class="card-text">

                        Cargo which includes import and export.
                        Courier & delivery - we can deliver to most locations in Nepal
                        Logistics & warehousing - we can receive, manage and fulfill.
                        Transport - we can provide you fleet management & transport solutions
                        Technology - advanced eCommerce banking and logistic tech
                        Projects - we deliver aid and help meet your project logsitics needs
                    </p>
                </div>

            </div>
        </div>
        <CardDeck />
        <ChooseUs />
        </section>

    )
}

export default AboutUs;

