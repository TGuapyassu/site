import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default Home;