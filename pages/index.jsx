import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Portfolio from '../pages/portfolio'
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
const home = () => {

    

    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <Portfolio></Portfolio>
            <Footer />
        </div>
    )
}

export default home