import FacebookIcon from "@/public/icons/icon-facebook.svg";
import InstagramIcon from "@/public/icons/icon-instagram.svg";
import PinterestIcon from "@/public/icons/icon-pinterest.svg";

const Footer = () => {
    return(
      <footer className="relative bg-cover bottom-0 w-full h-[11rem] sm:h-[11rem] md:h-[12rem] lg:h-[14rem] bg-[url('/assets/pattern-hills.svg')]">
        <div className="w-full flex justify-center pt-21 space-x-6 sm:space-x-6 md:space-x-7 lg:space-x-8">
          <a href="https://www.facebook.com">
            <FacebookIcon className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
          </a>
          <a href="https://www.pinterest.com">
            <PinterestIcon className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon className="text-[#8285a7] w-8 h-8 hover:text-[#dc6081]"/>
          </a>
        </div>
      </footer>
    )
}
export default Footer;