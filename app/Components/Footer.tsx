import FacebookIcon from "@/public/icons/icon-facebook.svg";
import InstagramIcon from "@/public/icons/icon-instagram.svg";
import PinterestIcon from "@/public/icons/icon-pinterest.svg";

const Footer = () => {
    return(
        <footer className="absolute bg-cover bottom-0 w-full h-50 bg-[url('/assets/pattern-hills.svg')]">
        <div className="w-full flex justify-center space-x-10 pt-24">
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