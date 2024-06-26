import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2-new.png";
const Navbar = () => {
  return (
    <div className="Navbar row m-0 p-0 justify-content-center ">
      <div className="col-8 row m-0 p-0 align-items-baseline ">
        <div className="col-8">
          <img src={logo} alt="logo" className="logo w-100" />
        </div>
        <div className="col-4">
          <img src={logo2} alt="logo2" className="w-100" />
          <div className="row m-0 p-0 d-flex mt-1">
            <p className="m-0 p-0 col-4">Search for:</p>
            <input type="text" id="search" className="col-8  rounded-1" />
          </div>
          <div className="row m-0 p-0 justify-content-end ">
            <button className="w-auto border border-2 rounded-1 ">Search</button>
          </div>
        </div>
      </div>
      <div className="Navlist row m-0 p-3 mt-3 justify-content-center ">
            <div className="col-8 row m-0 p-0 align-items-center">
                <div className="col-1 ps-4 pe-4 w-auto"><i class="bi bi-house-fill text-light fs-4"></i></div>
                <div className="col-1 ps-4 pe-4 w-auto border border-top-0 border-bottom-0  text-light">Journal</div>
                <div className="col-1 ps-4 pe-4 w-auto border border-top-0 border-bottom-0 border-start-0 text-light">Submit Manuscript</div>
                <div className="col-1 ps-4 pe-4 w-auto border border-top-0 border-bottom-0 border-start-0 text-light">For Authors</div>
                <div className="col-1 ps-4 pe-4 w-auto border border-top-0 border-bottom-0 border-start-0 text-light">Publication Ethics</div>
                <div className="col-1 ps-4 pe-4 w-auto text-light">Contact Us</div>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
