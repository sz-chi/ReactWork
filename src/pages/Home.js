import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
function Home() {
    return (
        
            <div className="container">
                <div className="bg-color">                   
                   <Header
                      hi="Hellow InSomnia"
                      title="쪽! 내꿈꿔 안녕하세요 드림캐쳐입니다"
                      slogan="要夢到我喔，大家好，我們是 Dreamcatcher"
                    />
                    <br/>
                   <ProductList />
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>    
                   <br/>
                   <br/>
                   <br/>               
                   <Footer />
                </div>
            </div>
        
    );
}

export default Home;