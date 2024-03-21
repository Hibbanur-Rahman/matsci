import homeBanner from "../assets/images/home_banner.jpg";
import SidebarImag1 from "../assets/images/home_sidebar_image1.jpg";
import SidebarImag2 from "../assets/images/home_sidebar_image2.jpg";
import SidebarImag3 from "../assets/images/home_sidebar_image3.jpg";
import SidebarImag4 from "../assets/images/home_sidebar_image4.jpg";

import SidebarImag6 from "../assets/images/home_sidebar_image6.jpg";
import SidebarImag7 from "../assets/images/home_sidebar_image7.jpg";
import SidebarImag8 from "../assets/images/home_sidebar_image8.png";
import SidebarImag9 from "../assets/images/home_sidebar_image9.jpeg";
import SidebarImag10 from "../assets/images/home_sidebar_image10.png";
import SidebarImag11 from "../assets/images/home_sidebar_image11.png";
import SidebarImag12 from "../assets/images/home_sidebar_image12.jpg";

const Home = () => {
  return (
    <div className="home row m-0 p-0 justify-content-center ">
      <div className="col-8 m-0 p-0">
        <div className="row m-0 p-0">
          <img src={homeBanner} alt="home Banner" className="w-100 m-0 p-0"/>
        </div>
        <div className="card m-0 p-5 d-flex flex-row">
          <div className="col-2 m-0 p-0">
            <img src={SidebarImag1} alt="sidebar image" className="w-100"/>
            
          </div>
          <div className="col-8 m-0 p-0">
            <h1>Hello</h1>
          </div>
          <div className="col-2 m-0 p-0">
            <img src={SidebarImag3} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag4} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag6} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag7} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag8} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag9} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag10} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag11} alt="sidebar image" className="w-100 mt-3 mb-3" />
            <img src={SidebarImag12} alt="sidebar image" className="w-100 mt-3 mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
