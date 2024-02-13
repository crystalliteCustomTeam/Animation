"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";
import {
    Navbar, Collapse, Typography, List, ListItem, Menu, MenuHandler, MenuList, MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon, Bars3Icon, XMarkIcon, ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon,
} from "@heroicons/react/24/solid";
// Import Images
import logo from "../../../public/images/logo.gif";

const megaMenuItems = [
    {
        title: "2d Animation",
        icon: SquaresPlusIcon,
        href: "/2d-animation",
    },
    {
        title: "3d Animation",
        icon: UserGroupIcon,
        href: "/3d-animation",
    },
    {
        title: "Architectural Services",
        icon: Bars4Icon,
        href: "/architectural-services",
    },
    {
        title: "CGI & VFX",
        icon: SunIcon,
        href: "/cgi-and-vfx",
    },
    {
        title: "Hybrid & cel Animations",
        icon: GlobeAmericasIcon,
        href: "/hybrid-&-cel-animations",
    },
    {
        title: "Infographics Design",
        icon: PhoneIcon,
        href: "/infographics-design",
    },
    {
        title: "Logo Animation",
        icon: NewspaperIcon,
        href: "/logo-animation",
    },
    {
        title: "Motion Graphics",
        icon: RectangleGroupIcon,
        href: "/motion-graphics",
    },
    {
        title: "Video Editing",
        icon: TagIcon,
        href: "/video-editing",
    },
    {
        title: "Whiteboard Animation",
        icon: UserGroupIcon,
        href: "/whiteboard-animation",
    },
];

function MegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = megaMenuItems.map(
        ({ icon, title, href }, key) => (
            <div key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg mb-1 lg:mb-0">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6 text-black",
                        })}
                    </div>
                    <div>
                        <Link
                        href={href}
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center font-sans text-[16px] font-normal text-black h-full"
                        >
                            {title}
                        </Link>
                    </div>
                </MenuItem>
            </div>
        ),
    );
    // Mobile Mega Menu 
    const [megamenu, setMegaMenu] = React.useState(false);
    const handleMegaMenu = () => {
        setMegaMenu((prev) => !prev);
    }
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Link href="#"  variant="small" className="font-medium">
                        <span
                            className="flex items-center px-2 gap-2 py-2 font-sans text-[14px] xl:text-[16px] font-normal leading-[20px]"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => {
                                if (window.innerWidth <= 991) {
                                    handleMegaMenu();
                                } else {
                                    setIsMobileMenuOpen((cur) => !cur)
                                }
                            }}
                        >
                            Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 mt-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </Link>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className={megamenu ? `absolute left-[0%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out` : `lg:hidden absolute left-[-130%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out`}>
                <Collapse open={isMobileMenuOpen} className="h-full overflow-visible">{renderItems}</Collapse>
                <div className="absolute top-[10px] right-[10px] bg-black rounded-full p-1" onClick={() => handleMegaMenu()}>
                    <XMarkIcon
                        strokeWidth={2.5}
                        className={`block h-5 w-5 transition-transform text-white lg:hidden`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 lg:mt-0 mb-0 p-0 pb-4 lg:pb-0 lg:flex-row lg:p-1 gap-3 bg-black lg:bg-transparent border-b-2 border-[prime/100] lg:border-0">
            <Link
                href="/"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Home</span>
            </Link>
            <Link
                href="/why-us"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Why Us</span>
            </Link>
            <MegaMenu />
            <Link
                href="/portfolio"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Portfolio</span>
            </Link>
            <Link
                href="/process"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Process</span>
            </Link>
            <Link
                href="/pricing"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Pricing</span>
            </Link>
            <Link
                href="/blog"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Blog</span>
            </Link>
            <Link
                href="/contact-us"
                variant="small"
                color="white"
                className="font-sans text-[14px] xl:text-[16px] font-normal"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">
                    Contact Us
                </span>
            </Link>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <header className="w-full absolute top-0 left-0 z-[9999] rounded-none bg-transparent">
            <div className="container">
                <Navbar className="max-w-none px-0 py-2 rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                    <div className="flex items-center justify-between text-white relative">
                        <Typography
        
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2 lg:w-[315px]"
                        >
                            <Image src={logo} className="w-[45%] xl:w-[60%]" alt="Infinity Animation" />
                        </Typography>
                        <div className="hidden lg:flex gap-5">
                            <NavList />
                            <CTA
                                text="Get Started"
                                icon1={true}
                                bg="bg-prime"
                                color={`text-white`}
                                border={`border-2 border-[#f5090b]`}
                                hover="hover:bg-transparent"
                                href="#"
                            />
                        </div>
                        <button onClick={() => setOpenNav(!openNav)} className="block lg:hidden">
                        {openNav ? (
                                <XMarkIcon className="h-[40px] w-[40px]" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-[40px] w-[40px]" strokeWidth={2} />
                            )}
                        </button>
                    </div>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden">
                            <NavList />
                        </Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
}
export default Header;