"use client"
// React
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import BG from "media/animated-explainer-video-agency/bg_gradient.webp"
// Components
import LottieAnimation from "../LottieAnimation"
// Axios
import Axios from "axios"
const ContactForm = () => {
     //========== Form
  const [ip, setIP] = useState("")
  const [pagenewurl, setPagenewurl] = useState("")
  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState("Send")
  const [isDisabled, setIsDisabled] = useState(false)
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  //========== Fetch IP data from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get("https://ipwho.is/")
      setIP(res.data)
    } catch (error) {
      console.error("Error fetching IP data:", error)
    }
  }

  useEffect(() => {
    getIPData()
    setPagenewurl(window.location.href)
  }, [])

  const router = usePathname()
  const currentRoute = router

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const formValidateHandle = () => {
    let errors = {}
    if (!data.name.trim()) {
      errors.name = "Name is required"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required"
    }
    const phoneRegex = /^[0-9]+$/
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required"
    }
    return errors
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("Processing...")
    setIsDisabled(true)

    const errors = formValidateHandle()
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString()
      const dataToSend = {
        ...data,
        pageUrl: pagenewurl,
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      }
      const JSONdata = JSON.stringify(dataToSend)

      try {
        //========== First API call to your server
        await fetch("/api/email/", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSONdata,
        })

        //========== Second API call to SheetDB
        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        }
        let bodyContent = JSON.stringify({
          IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
          Brand: "Infinity Animations",
          Page: `${currentRoute}`,
          Date: currentdate,
          Time: currentdate,
          JSON: JSONdata,
        })
        await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        })
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const raw = JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "email",
              value: data.email,
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: data.name,
            },
            {
              objectTypeId: "0-1",
              name: "phone",
              value: data.phone,
            },
          ],
          context: {
            ipAddress: ip.ip,
            pageUri: pagenewurl,
            pageName: currentRoute,
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Example Company to store and process my personal data.",
              communications: [
                {
                  value: true,
                  subscriptionTypeId: 999,
                  text: "I agree to receive marketing communications from Example Company.",
                },
              ],
            },
          },
        })
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }
        await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/47083847/011ef447-7771-4b56-8014-8004c3cdcc51",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error))

        setFormStatus("Success...")
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } catch (error) {
        console.error("Error during form submission:", error)
        setFormStatus("Failed...")
        setIsDisabled(false)
      }
    } else {
      setFormStatus("Failed...")
      setIsDisabled(false)
    }
  }
  return (
    <section>
      <div className="bg-[#161513] sm:pt-[0] sm:pb-[80px] py-[30px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-x-5 items-center sm:gap-y-5 gap-y-10">
            <div className="col-span-12 relative z-10 md:p-[40px_30px] p-[30px_20px] rounded-[12px]">
                <Image src={BG} alt="banner" className="absolute -z-10 w-full h-full object-cover object-center inset-0 rounded-[12px]"/>
                <h2 className="text-white xl:text-[48px] md:tracking-[-2.4px] md:text-[35px] sm:text-[24px] text-[20px] leading-none font-semibold lg:mb-[25px] mb-[15px]">
                Book a meeting with a member of our team to learn more and get a quote today!
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 mt-8">
                <LottieAnimation animationPath="/animated-explainer-video-agency/Eqotgq2OXU.json" />
                <div className="text-white max-w-[500px] mx-auto">
              <h2 className="xl:text-[40px] md:text-[35px] text-[30px] font-semibold leading-tight">
                Get a Quote
              </h2>
              <form method="POST" className="mt-5">
                <div className="grid grid-cols-1 gap-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="text-[14px] bg-[#181818] font-normal leading-[25px] w-full text-white py-[10px] px-[15px] rounded-[5px] focus:outline-2 focus:outline-white"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.name && (
                      <span className="text-[12px] block p-2 font-semibold text-black absolute left-0 bottom-[-50%] z-50">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Company Email Address"
                      className="text-[14px] bg-[#181818] font-normal leading-[25px] w-full text-white py-[10px] px-[15px] rounded-[5px] focus:outline-2 focus:outline-white"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.email && (
                      <span className="text-[12px] block p-2 font-semibold text-black absolute left-0 bottom-[-50%] z-50">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      name="phone"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      placeholder="Mobile Number"
                      className="text-[14px] bg-[#181818] font-normal leading-[25px] w-full text-white py-[10px] px-[15px] rounded-[5px] focus:outline-2 focus:outline-white"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.phone && (
                      <span className="text-[12px] block p-2 font-semibold text-black absolute left-0 bottom-[-50%] z-50">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] block pl-[15px] font-semibold text-[#bdbdbd] max-w-[400px] mt-3">
                    By continuing you agree to the Explainly{" "}
                    <Link href="/privacy-policy" className="text-[#ffaf00] underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to receive communications from us.
                  </span>
                  <div className="flex items-center justify-between xl:gap-x-8 gap-x-3 mt-8">
                    <button
                      className="h-[60px] text-center w-full inline-flex items-center justify-center sm:px-[23px] px-[15px] text-[#1c1b18] bg-[#ffaf00] rounded-[60px] xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase"
                      onClick={handleFormSubmit}
                      disabled={isDisabled}
                    >
                      {formStatus}
                    </button>
                    <a
                      href="tel:833-666-6689"
                      className="border border-white text-white xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[15px] h-[60px] text-center w-full rounded-[60px] duration-700 transition-all bg-transparent hover:duration-700 hover:transition-all"
                    >
                      Book a call
                    </a>
                  </div>
                </div>
              </form>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
