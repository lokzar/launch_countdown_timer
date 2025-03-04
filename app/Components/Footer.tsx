
const Footer = () => {
    return(
        <footer className="absolute bg-cover bottom-0 w-full h-50 bg-[url('/assets/pattern-hills.svg')]">
        <div className="w-full flex justify-center space-x-10 pt-24">
          <a href="https://www.facebook.com">
            <img className="" src="/icons/icon-facebook.svg" alt= "facebook svg"/>
          </a>
          <a href="https://www.pinterest.com">
            <img className="" src="/icons/icon-pinterest.svg" alt= "facebook svg"/>
          </a>
          <a href="https://www.instagram.com">
            <img className="" src="/icons/icon-instagram.svg" alt= "facebook svg"/>
          </a>
        </div>
      </footer>
    )
}
export default Footer;