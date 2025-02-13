import Link from "next/link"
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#161513] sm:py-[50px] pt-[20px] pb-[50px] font-mono">
          <div className="container">
            <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 sm:gap-y-0 gap-y-10">
              <div className="col-span-12 grid grid-cols-1">
                <div className="text-white flex items-center justify-center gap-x-1 border-t border-[#888888] pt-[30px]">
                  <Link
                    href="https://www.facebook.com/infinityanimationsofficial"
                    className="facebook bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center"
                  >
                    <FaFacebookF className="text-[23px] sm:text-[32px]" />
                  </Link>
                  <Link
                    href="https://twitter.com/infinityan_/"
                    className="twitter bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center"
                  >
                    <FaTwitter className="text-[23px] sm:text-[32px]" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/infinity-animations/"
                    className="google bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center "
                  >
                    <FaLinkedinIn className="text-[23px] sm:text-[32px]" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@Infinity-Animations"
                    className="youtube bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center"
                  >
                    <FaYoutube className="text-[23px] sm:text-[32px]" />
                  </Link>
                  <Link
                    href="https://www.vimeo.com/infinityanimations"
                    className="printerest bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center"
                  >
                    <FaVimeoV className="text-[23px] sm:text-[32px]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/infinityanimationsofficials"
                    className="instagram bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#ffaf00] flex items-center justify-center"
                  >
                    <FaInstagram className="text-[23px] sm:text-[32px]" />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-5 lg:w-9/12 mx-auto pt-8">
                  <div className="number">
                    <Link
                      href="tel:833-666-6689"
                      className="text-white font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2"
                    >
                      <FaPhoneAlt className="text-[#ffaf00] text-[18px]" />
                      <span>833-666-6689</span>
                    </Link>
                  </div>
                  <div className="email">
                    <Link
                      href="mailto:queries@infinityanimations.com"
                      className="text-white font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2"
                    >
                      <FaEnvelope className="text-[#ffaf00] text-[18px]" />
                      <span>queries@infinityanimations.com</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_bottom bg-[#161513] text-white text-center">
        <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto border-t border-[#888888] py-[10px]">
          <span className="text-[14px] pb-[12px] text-white montserrat text-center ">
            © 2024 -{" "}
            <p className="text-[14px] lg:text-[16px] poppins text-center inline">
              {" "}
              All Rights Reserved{" "}
            </p>{" "}
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
