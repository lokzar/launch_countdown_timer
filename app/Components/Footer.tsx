import FacebookIcon from "@/public/icons/icon-facebook.svg";
import InstagramIcon from "@/public/icons/icon-instagram.svg";
import PinterestIcon from "@/public/icons/icon-pinterest.svg";

//NOTE: Had to install svgr/webpack to import SVG as a react component, this loader lets me interact with SVG files and change it's properties, in this case to change it's color on hover
const Footer = () => {
    return(
      <footer className="relative bg-cover bottom-0 w-full h-[11rem] sm:h-[11rem] md:h-[12rem] lg:h-[14rem] bg-[url('/assets/pattern-hills.svg')]">
        <ul className="w-full flex justify-center pt-25 space-x-6 sm:space-x-6 md:space-x-7 lg:space-x-8">
          <li>
            <a href="https://www.facebook.com" target="blank_">
              <FacebookIcon roll="img" className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" target="blank_">
              <PinterestIcon roll="img" className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="blank_">
              <InstagramIcon roll="img" className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
            </a>
          </li>
        </ul>
      </footer>
    )
}
export default Footer;