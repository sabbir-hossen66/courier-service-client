import Marquee from "react-fast-marquee";
import logo1 from "../assets/logo/pexels-cottonbro-4829132.jpg"
import logo2 from "../assets/logo/pexels-kuan-yu-huang-252427105-16029605.jpg"
import logo3 from "../assets/logo/pexels-vothevien-56950 (1).jpg"
import logo4 from "../assets/logo/pexels-zero-promosi-3567653-27906668.jpg"
import logo5 from "../assets/logo/pexels-zero-promosi-3567653-27906668.jpg"
import logo6 from "../assets/logo/pexels-zero-promosi-3567653-27906668.jpg"

const CompaniesLogo = () => {
  return (
    <Marquee speed={100} gradient={false} className="bg-gray-100 py-10">
      <img src={logo1} alt="Company Logo 1" className="h-16 mx-18" />
      <img src={logo2} alt="Company Logo 2" className="h-16 mx-18" />
      <img src={logo3} alt="Company Logo 3" className="h-16 mx-18" />
      <img src={logo4} alt="Company Logo 4" className="h-16 mx-18" />
      <img src={logo5} alt="Company Logo 4" className="h-16 mx-18" />
      <img src={logo6 } alt="Company Logo 4" className="h-16 mx-18" />
    </Marquee>
  );
};

export default CompaniesLogo;