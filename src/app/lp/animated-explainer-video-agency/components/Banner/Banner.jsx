"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Axios from "axios"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Banner = () => {
  //========== Popup

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
      <div className="font-mono relative z-10 sm:pt-[180px] pt-[150px] pb-[60px] xl:h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          disablePictureInPicture
          loop
          className="absolute -z-10 w-full h-full object-cover object-center inset-0 bg-[#161513]"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/1025440805/rendition/1080p/file.mp4?loc=external&signature=81f489c58586ce519b6331e8b84a07d83c4257a29cf6c856a79e666faad9e958" />
          <p>Your Browser Did Not Support Video</p>
        </video>
        <span className="absolute bg-[#16151380] -z-10 w-full h-full inset-0"></span>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center max-w-[1240px] mx-auto">
            <div className="text-white max-w-[540px]">
              <h1 className="xl:text-[75px] md:text-[50px] sm:text-[40px] text-[30px] font-semibold leading-none mb-5">
                Animated Explainer Video Agency
              </h1>
              <p className="xl:text-lg md:text-base text-sm font-normal leading-normal max-w-[500px]">
                Looking for a video agency to create an animated explainer video
                for your company? Infinity Animationshas you covered.
              </p>
              <div className="flex items-center gap-x-3 mt-5">
                <a
                  href="javascript:void(Tawk_API.toggle())"
                  className="border border-white text-white xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[15px] h-[60px] text-center w-full rounded-[60px] duration-700 transition-all bg-transparent hover:duration-700 hover:transition-all"
                >
                  Get Started
                </a>
                <a
                  href="tel:833-666-6689"
                  className="border border-[#ffaf00] text-[#1c1b18] xl:text-base text-xs leading-tight font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center sm:px-[23px] px-[15px] h-[60px] text-center w-full rounded-[60px] duration-700 transition-all bg-[#ffaf00] hover:duration-700 hover:transition-all"
                >
                  Book a call
                </a>
              </div>
            </div>
            <div className="xl:p-[20px_40px_40px_40px] p-[20px_25px_40px_25px] rounded-[25px] backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] text-white max-w-[500px] mx-auto">
              <h2 className="md:text-[40px] text-[30px] font-semibold leading-tight">
                Get a Quote
              </h2>
              <form method="POST" className="mt-5">
                <div className="grid grid-cols-1 gap-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="text-[14px] border-b border-white bg-transparent md:text-[16px] font-normal leading-[25px] w-full text-white py-[10px] px-[8px] focus:outline-2 focus:outline-white"
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
                      className="text-[14px] border-b border-white bg-transparent md:text-[16px] font-normal leading-[25px] w-full text-white py-[10px] px-[8px] focus:outline-2 focus:outline-white"
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
                      className="text-[14px] border-b border-white bg-transparent md:text-[16px] font-normal leading-[25px] w-full text-white py-[10px] px-[8px] focus:outline-2 focus:outline-white"
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
                    <Link href="/privacy-policy" className="text-[#ffaf00]">
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
