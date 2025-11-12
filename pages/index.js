import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiHome, BiMenu } from "react-icons/bi";
import { LuLink, LuUserRound } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegImage,
} from "react-icons/fa";
import { MdOutlineDisplaySettings } from "react-icons/md";

export default function Home() {
  const { asPath } = useRouter();
  const [showNav, setShowNav] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const menus = [
    {
      url: "/",
      label: "Home",
      icon: <BiHome size={20} />,
    },
    {
      url: "#about",
      label: "About",
      icon: <LuUserRound size={20} />,
    },
    {
      url: "#experience",
      label: "Experience",
      icon: <FaRegFileAlt size={20} />,
    },
    {
      url: "#projects",
      label: "Projects",
      icon: <MdOutlineDisplaySettings size={20} />,
    },
    {
      url: "#contact",
      label: "Contact",
      icon: <FaRegEnvelope size={20} />,
    },
  ];

  const skills = [
    {
      name: "HTML",
      level: "Advanced",
    },
    {
      name: "CSS",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      name: "React.js",
      level: "Intermediate",
    },
    {
      name: "Next.js",
      level: "Intermediate",
    },
    {
      name: "Drupal",
      level: "Intermediate",
    },
    {
      name: "WordPress",
      level: "Intermediate",
    },
    {
      name: "Redux",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
    },
    {
      name: "Bootstrap CSS",
      level: "Intermediate",
    },
    {
      name: "SASS",
      level: "Intermediate",
    },
    {
      name: "SEO",
      level: "Intermediate",
    },
    {
      name: "Git",
      level: "Intermediate",
    },
    {
      name: "Responsive Design",
      level: "Advanced",
    },
    {
      name: "UI/UX Principles",
      level: "Intermediate",
    },
    {
      name: "MySQL",
      level: "Intermediate",
    },
    {
      name: "GraphQL",
      level: "Intermediate",
    },
  ];

  const experience = [
    {
      companyName: "Freelance",
      year: "October 2024 - July 2025",
      position: "Front End Developer",
      jobDescription: [
        {
          description:
            "Develop and maintain responsive, high-performance web applications using Next.js, React, and modern frameworks.",
        },
        {
          description:
            "Collaborate with cross-functional teams including designers, project managers, and backend developers to deliver seamless and accessible user experiences.",
        },
        {
          description:
            "Optimize site performance, SEO, and Core Web Vitals to ensure top-tier user engagement and search engine visibility.",
        },
        {
          description:
            "Write clean, maintainable code with a focus on reusability, performance, and industry best practices.",
        },
      ],
    },
    {
      companyName: "Halcyon Agile",
      year: "July 2021 - JULY 2024",
      position: "Front End Developer",
      jobDescription: [
        {
          description:
            "Develop and maintain responsive, high-performance web applications using Next.js, React, and modern frameworks.",
        },
        {
          description:
            "Collaborate with cross-functional teams including designers, project managers, and backend developers to deliver seamless and accessible user experiences.",
        },
        {
          description:
            "Integrate headless CMS solutions (e.g., Contentful, Sanity) to enable scalable and flexible content management.",
        },
        {
          description:
            "Optimize site performance, SEO, and Core Web Vitals to ensure top-tier user engagement and search engine visibility.",
        },
        {
          description:
            "Write clean, maintainable code with a focus on reusability, performance, and industry best practices.",
        },
        {
          description:
            "Contribute to code reviews, documentation, and agile development processes to support a high-quality delivery pipeline.",
        },
      ],
    },
    {
      companyName: "Ajio IT Solutions",
      year: "OCTOBER 2020 - June 2021",
      position: "Web Developer",
      jobDescription: [
        {
          description:
            "Responsible for implementing visual elements that users see and interact with within a web application.",
        },
        {
          description:
            "CConverting the provided design by our client into responsive web design.",
        },
        {
          description: "Maintaining and improving website",
        },
        {
          description:
            "Write clean, maintainable code with a focus on reusability, performance, and industry best practices.",
        },
      ],
    },

    {
      companyName: "TBL Technerds",
      year: "August 2019 - December 2019",
      position: "Front End Developer",
      jobDescription: [
        {
          description:
            "Using markup languages like HTML to create user-friendly web pages",
        },
        {
          description:
            "Converting the provided design by our client into responsive web design",
        },
        {
          description: "Maintaining and improving website.",
        },
        {
          description: "Optimizing applications for maximum speed.",
        },
      ],
    },
  ];

  const projects = [
    {
      name: "Project One",
      description: "Description for project one.",
      link: "https://bnc-development-bbfbe.web.app/",
      image: "/images/project/bnc.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://discovery-hospitality.pages.dev/",
      image: "/images/project/hospitality.webp",
    },
    {
      name: "Project One",
      description: "Description for project one.",
      link: "https://www.questhotelsandresorts.com/",
      image: "/images/project/quest.webp",
    },
    {
      name: "Project Two",
      description: "Description for project two.",
      link: "https://www.azurebeachclubs.com/",
      image: "/images/project/azure1.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://www.yantraseeds.com/",
      image: "/images/project/yantra.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://discoveryhospitality.com/",
      image: "/images/project/discovery-hospitality.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://www.discoverysuites.com/",
      image: "/images/project/suites.webp",
    },
    // {
    //   name: "Project One",
    //   description: "Description for project one.",
    //   link: "https://www.discoveryshoresboracay.com/",
    //   image: "/images/project/shores.webp",
    // },
    {
      name: "Project Two",
      description: "Description for project two.",
      link: "https://www.clubparadisepalawan.com/",
      image: "/images/project/club-paradise.webp",
    },
    // {
    //   name: "Project Three",
    //   description: "Description for project three.",
    //   link: "https://discovery-primea.pages.dev/",
    //   image: "/images/project/primea.webp",
    // },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://discoveryresorts.com.ph/",
      image: "/images/project/discovery-resorts.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://www.bpi.com.ph/",
      image: "/images/project/bpi.webp",
    },
    {
      name: "Project Three",
      description: "Description for project three.",
      link: "https://thevotingvault.com/",
      image: "/images/project/voting-vault.webp",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    if (showNav && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasShadow(true);
        setShowScrollTop(true);
      } else {
        setHasShadow(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logo = "/images/logov2.png";
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <aside
          className={`fixed top-0 left-0 w-64 bg-[#1e3a5f] text-white flex flex-col items-center pt-8 h-full border-r border-gray-200 transition-transform duration-500 ease-in-out z-50 ${
            showNav ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="flex items-center mb-10 gap-x-3">
            <Image src={logo} alt="Logo" width={50} height={50} priority />
            <div>
              <h2 className="text-lg font-bold">Vince Quinaging</h2>
              <p className="text-sm text-gray-300">Front End Developer</p>
            </div>
          </div>

          <nav className="flex flex-col w-full p-6">
            <ul className="flex flex-col gap-4">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`flex items-center gap-x-2 py-2.5 w-full md:px-[25px] ${
                      asPath === item?.url
                        ? "text-white"
                        : "hover:text-[#0073aa] w-full"
                    } cursor-pointer`}
                    onClick={() => setShowNav(false)} // close menu after click
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm tracking-wide">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex mt-auto pb-4 text-gray-300 text-sm gap-x-4">
            <Link href="#" target="_blank">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" target="_blank">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" target="_blank">
              <FaGithub size={24} />
            </Link>
          </div>
        </aside>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 cursor-pointer bg-[#0073aa] text-white p-3 rounded-full shadow-lg hover:bg-[#1e3a5f] border-2 hover:border-white transition z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        )}

        <button
          onClick={() => setShowNav(!showNav)}
          className="fixed top-6 right-6 z-50 bg-[#1e3a5f] border-2 border-white text-white p-3 rounded-lg shadow-lg lg:hidden transition-all duration-300 hover:bg-[#122339]"
          aria-label="Toggle Navigation"
        >
          <BiMenu size={24} />
        </button>

        {showNav && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setShowNav(false)}
          ></div>
        )}

        <main className="flex-1 overflow-y-auto w-full max-w-full lg:ml-64 transition-all duration-500 ease-in-out">
          <section
            id="home"
            className="w-full flex h-dvh p-5 xl:p-10 bg-[#1e3a5f]"
          >
            <div className="container">
              <div className="flex flex-col lg:flex-row w-full h-full items-center gap-10">
                <div className="flex flex-col w-full lg:w-1/2 order-2 text-center md:text-start">
                  <span className="text-2xl md:text-[50px] text-white">
                    I'm{" "}
                    <span className="text-[#0073aa] italic font-semibold">
                      Vince Quinaging,
                    </span>
                  </span>
                  <span className="text-[20px] md:text-[50px] font-bold text-white">
                    Front End Developer
                  </span>
                  <p className="mt-1 md:mt-6 text-white leading-relaxed">
                    A passionate Front End Developer dedicated to crafting
                    engaging and user-friendly web experiences. Explore my work
                    and let's create something amazing together!
                  </p>

                  <div>
                    <button className="mt-6 px-6 py-3 text-sm uppercase cursor-pointer bg-[#0073aa] text-white rounded border-2 border-[#0073aa] hover:bg-transparent hover:border-[#ffffff] w-fit">
                      Hire me
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-center lg:w-1/2 order-1 lg:order-2">
                  <Image
                    src="/images/bannerv2.png"
                    alt="#"
                    width={1000}
                    height={1000}
                    priority
                    className="object-cover w-[500px] h-full transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="flex flex-col bg-white  items-center justify-center p-5 xl:p-10"
          >
            <div className="container">
              <div className="flex flex-col">
                <h2 className="text-4xl font-semibold inline-block ">
                  About Me
                </h2>
                <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
                <p className="text-gray-700 text-md leading-relaxed">
                  As a <b className="text-[#1e3a5f]">Front End Developer</b>, I
                  craft fast, responsive, and user-focused web applications. I’m
                  passionate about clean design, seamless functionality, and
                  optimizing performance for the best user experience.
                  Collaboration, problem-solving, and attention to detail drive
                  every project I build.
                </p>
                <div className="w-full flex flex-col lg:flex-row mt-6 gap-8">
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Get to know</h3>
                    <p className="text-gray-700 text-md leading-relaxed">
                      I'm a <b className="text-[#1e3a5f]">Frontend Developer</b>{" "}
                      building and managing the Front-end of Websites and Web
                      Applications that leads to the success of the overall
                      product.
                    </p>
                    <p className="text-gray-700 text-md leading-relaxed mt-5">
                      I am proficient in HTML, CSS, JavaScript, and popular
                      frameworks like React.js and Next.js. I create responsive,
                      user-friendly interfaces that enhance user experience
                      across devices.
                    </p>
                    <p className="text-gray-700 text-md leading-relaxed mt-5">
                      I collaborate closely with designers and back-end
                      developers to deliver high-quality web solutions that meet
                      client needs and industry standards.
                    </p>
                    <p className="text-gray-700 text-md leading-relaxed mt-5">
                      With a keen eye for detail and a passion for innovation, I
                      strive to stay updated with the latest web development
                      trends and technologies.
                    </p>
                    <p className="text-gray-700 text-md leading-relaxed mt-5">
                      Let's connect and create exceptional web experiences
                      together! Feel free to Connect or Follow me on my{" "}
                      <Link
                        href="https://www.linkedin.com/in/vince-quinaging-614104163"
                        target="_blank"
                        className="text-[#0073aa] underline"
                      >
                        Linkedin
                      </Link>
                      .
                    </p>
                    <Link
                      href="https://drive.google.com/file/d/1qL7SperlF9nG1uQTXtu_Hwi58XCA-ulh/view?usp=drive_link"
                      target="_blank"
                      className="mt-4 inline-block text-sm px-6 py-3 uppercase cursor-pointer bg-[#1e3a5f] text-white rounded hover:bg-[#ffffff] border-2 hover:border-[#1e3a5f] hover:text-[#1e3a5f] font-semibold w-fit"
                    >
                      Download CV
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                    <div className="flex flex-wrap">
                      {skills.map((item, index) => {
                        return (
                          <>
                            <span
                              key={index}
                              className="inline-block bg-[#1e3a5f] text-white text-lg px-4 py-2 rounded-full mr-2 mb-2"
                            >
                              {item.name}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="flex flex-col items-center justify-center p-5 xl:p-10 bg-[#1e3a5f] text-white"
          >
            <div className="container">
              <div className="w-full flex flex-col ">
                <h2 className="text-2xl md:text-4xl font-semibold ">
                  My Work Experience
                </h2>
                <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
                {/* <p className="text-gray-700">Detail your work experience here...</p> */}
                {experience.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="flex flex-col md:flex-row w-full pt-5 gap-x-5"
                      >
                        <div className="w-full md:w-1/3 lg:w-1/4 space-y-2 md:space-y-0 pb-5 md:pb-0">
                          <h3 className="font-semibold pb-1 uppercase">
                            {item.companyName}
                          </h3>
                          <span className="text-sm text-[#1e3a5f] font-semibold bg-white p-2">
                            {item.year}
                          </span>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                          <h4 className="font-semibold uppercase pb-5 md:pb-0">
                            {item.position}
                          </h4>
                          <ul className="list-disc list-inside text-white">
                            {item?.jobDescription?.map((item, index) => (
                              <li className="text-md">{item.description}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="projects" className="flex flex-col bg-white p-5 xl:p-10">
            <div className="container">
              <h2 className="text-4xl font-semibold ">Projects</h2>
              <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
              <div className="space-y-3 pb-5">
                <p className="text-gray-700 text-md ">
                  Some of my works here speak for themselves, reflecting the
                  quality and attention to detail I bring to each project. I
                  hope they provide you with a better understanding of the wide
                  range of services I offer. I have hands-on experience working
                  with the latest technologies like React, Next.js, TailwindCSS,
                  and JavaScript, and I have built several websites from
                  scratch.
                </p>
                <p className="text-gray-700 text-md pb-4">
                  Additionally, I integrate headless CMS solutions to enable
                  scalable and flexible content management. I also optimize site
                  performance, SEO, and Core Web Vitals to ensure top-tier user
                  engagement and visibility across search engines.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                {displayedProjects.map((item, index) => (
                  <div key={index} className="rounded shadow">
                    <div className="relative group w-full h-64 overflow-hidden flex transition-all duration-500">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out"
                      />

                      <div className="absolute inset-0 group-hover:bg-[#ffffff]/40 transition-all duration-700 ease-in-out" />

                      <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                        <div className="flex w-full">
                          <div className="w-1/2 flex items-center justify-center">
                            <Link
                              href={item.link}
                              target="_blank"
                              className="flex items-center justify-center cursor-pointer w-full h-[50px] bg-[#1e3a5f] text-white opacity-80 hover:opacity-100 hover:bg-[#122339] transition-all duration-500 ease-in-out"
                            >
                              <FaRegImage size={24} />
                            </Link>
                          </div>
                          <div className="w-1/2 flex items-center justify-center">
                            <Link
                              href={item.link}
                              target="_blank"
                              className="flex items-center justify-center cursor-pointer w-full h-[50px] bg-[#1e3a5f] text-white opacity-80 hover:opacity-100 hover:bg-[#122339] transition-all duration-500 ease-in-out"
                            >
                              <LuLink size={24} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              {projects.length > 3 && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-3 text-sm cursor-pointer bg-[#1e3a5f] text-white hover:text-[#1e3a5f] rounded hover:bg-transparent border-2 border-[#1e3a5f] hover:border-[#1e3a5f] transition-all duration-500 ease-in-out transform "
                  >
                    {showAll ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          </section>

          <section
            id="contact"
            className="flex flex-col bg-[#1e3a5f] p-5 xl:p-10"
          >
            <div className="container">
              <div className="flex flex-col md:flex-row w-full gap-x-10">
                <div className="w-full md:w-1/2 ">
                  <h2 className="text-4xl font-semibold text-white">Contact</h2>
                  <hr className="border-2 border-white w-[50px] mb-4" />
                  <p className="text-white pb-10">
                    Feel free to Contact me by submitting the form below and I
                    will get back to you as soon as possible
                  </p>
                  <div className="w-full ">
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-semibold mb-2 text-white"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter Your Name"
                          className="w-full border border-white focus:border-blue-500 text-gray-200 px-4 py-3 rounded-md outline-none transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-semibold mb-2 text-white"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter Your Email"
                          className="w-full border border-white focus:border-blue-500 text-gray-200 px-4 py-3 rounded-md outline-none transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-semibold mb-2 text-white"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          placeholder="Enter Your Message"
                          className="w-full border border-white focus:border-blue-500 text-gray-200 px-4 py-3 rounded-md outline-none resize-none transition"
                        ></textarea>
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          className="border border-white text-sm text-white font-semibold py-3 px-8 rounded-md transition cursor-pointer hover:bg-white hover:text-[#1e3a5f]"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-col h-auto w-full md:w-1/2 justify-between">
                  <div className="flex flex-col text-white pt-5 md:pt-0">
                    <p>
                      If you have any questions or queries about me and my work,
                      get in touch with me with any issues regarding my
                      services. Please feel free to contact me. You can use the
                      form below or send me an email. I will definitely reach
                      out to you.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pb-5 md:pb-0">
                      <div className="flex flex-col items-center">
                        <span className=" p-3 rounded-full bg-white text-[#1e3a5f]">
                          <FaPhone size={24} />
                        </span>
                        <span className="text-white pt-2">09953543834</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className=" p-3 rounded-full bg-white text-[#1e3a5f]">
                          <FaEnvelope size={24} />
                        </span>
                        <span className="text-white pt-2 flex-wrap text-center">
                          vince.quinaging @gmail.com
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className=" p-3 rounded-full bg-white text-[#1e3a5f]">
                          <IoLocationSharp size={24} />
                        </span>
                        <span className="text-white pt-2 text-center">
                          Camolinas Poblacion Cordova Cebu
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.129202832543!2d123.9514341!3d10.251162099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5406c22fd%3A0x9af2ac4715d5cc0c!2sCamolinas%20Chapel!5e0!3m2!1sen!2sph!4v1761381317909!5m2!1sen!2sph"
                      className="w-full"
                      height="350"
                      allowfullscreen=""
                      // loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-[#1e3a5f] text-white text-center pt-10 pb-4">
            &copy; {new Date().getFullYear()} Vince Quinaging. All rights
            reserved.
          </footer>
        </main>
      </div>
    </>
  );
}
