import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiHome, BiMenu } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
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
        <aside className="w-64 bg-[#1e3a5f] text-white flex flex-col items-center pt-8 fixed h-full border-r border-gray-200">
          <div className="flex  items-center mb-10 gap-x-3">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <div>
              <h2 className="text-xl font-bold ">Vince</h2>
              <p className="text-sm text-gray-300 ">Front End Developer</p>
            </div>
          </div>

          <nav className="flex flex-col w-full p-6">
            <ul className="flex flex-col gap-4">
              {menus.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-x-2 py-2.5 w-full md:px-[25px]  ${
                        asPath === item?.url
                          ? "text-white "
                          : "hover:text-[#0073aa] w-full"
                      } cursor-pointer `}
                      onClick={() => setShowNav(!showNav)}
                    >
                      <span className="">{item.icon}</span>
                      <span className="text-sm tracking-wide">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex mt-auto pb-4 text-gray-300 text-sm gap-x-4">
            <Link href="#" _target="_blank" className="">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" _target="_blank" className="">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" _target="_blank" className="">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" _target="_blank" className="">
              <FaGithub size={24} />
            </Link>
          </div>
        </aside>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 cursor-pointer bg-[#0073aa] text-white p-3 rounded-full shadow-lg hover:bg-[#1e3a5f] transition z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        )}

        <main className="ml-64 flex-1 overflow-y-auto w-full max-w-full">
          <section id="home" className="w-full flex h-dvh p-10 bg-[#1e3a5f]">
            <div className="container">
              <div className="flex w-full h-full items-center gap-10">
                <div className="flex flex-col w-1/2">
                  <span className="text-[50px] text-white">
                    I'm{" "}
                    <span className="text-[#0073aa] italic">
                      Vince Quinaging,
                    </span>
                  </span>
                  <span className="text-[50px] font-bold text-white">
                    Front End Developer
                  </span>
                  <p className="mt-6 text-white leading-relaxed">
                    A passionate Front End Developer dedicated to crafting
                    engaging and user-friendly web experiences. Explore my work
                    and let's create something amazing together!
                  </p>

                  <button className="mt-6 px-6 py-3 uppercase cursor-pointer bg-[#0073aa] text-white rounded hover:bg-[#1e3a5f] w-fit">
                    Hire me
                  </button>
                </div>
                <div> IMAGE HERE</div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="flex flex-col bg-white  items-center justify-center p-10"
          >
            <div className="container">
              <div className="flex flex-col">
                <h2 className="text-4xl font-semibold inline-block ">
                  About Me
                </h2>
                <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
                <p className="text-gray-700 leading-relaxed">
                  As an <strong>innovative Software Engineer</strong>, I build
                  products for web and mobile users, ensuring quality and speed.
                  I value collaboration, problem-solving, and customer
                  satisfaction.
                </p>
                <div className="w-full flex mt-6 gap-8">
                  <div className="w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Get to know</h3>
                    <p className="text-gray-700 text-lg">
                      I'm a <b>Frontend Developer</b> building and managing the
                      Front-end of Websites and Web Applications that leads to
                      the success of the overall product.
                    </p>
                    <p className="text-gray-700 text-lg mt-5">
                      I am proficient in HTML, CSS, JavaScript, and popular
                      frameworks like React.js and Next.js. I create responsive,
                      user-friendly interfaces that enhance user experience
                      across devices.
                    </p>
                    <p className="text-gray-700 text-lg mt-5">
                      I collaborate closely with designers and back-end
                      developers to deliver high-quality web solutions that meet
                      client needs and industry standards.
                    </p>
                    <p className="text-gray-700 text-lg mt-5">
                      With a keen eye for detail and a passion for innovation, I
                      strive to stay updated with the latest web development
                      trends and technologies.
                    </p>
                    <p className="text-gray-700 text-lg mt-5">
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
                      className="mt-4 inline-block text-sm px-6 py-3 uppercase cursor-pointer bg-[#0073aa] text-white rounded hover:bg-[#1e3a5f] w-fit"
                    >
                      Download CV
                    </Link>
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                    <div className="flex flex-wrap">
                      {skills.map((item, index) => {
                        return (
                          <>
                            <span
                              key={index}
                              className="inline-block bg-gray-200 text-gray-800 text-lg px-4 py-2 rounded-full mr-2 mb-2"
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
            className="flex flex-col items-center justify-center p-10 bg-[#1e3a5f] text-white"
          >
            <div className="container">
              <div className="w-full flex flex-col ">
                <h2 className="text-4xl font-semibold ">My Work Experience</h2>
                <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
                {/* <p className="text-gray-700">Detail your work experience here...</p> */}
                <div className="flex w-full pt-5">
                  <div className="w-1/4">
                    <h3 className="font-semibold">FREELANCE</h3>
                    <span className="text-sm text-gray-600">
                      OCTOBER 2024 - JULY 2025
                    </span>
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-semibold uppercase">
                      Front End Developer
                    </h4>
                    <ul className="list-disc list-inside text-white">
                      <li>
                        Develop and maintain responsive, high-performance web
                        applications using Next.js, React, and modern
                        frameworks.
                      </li>
                      <li>
                        Collaborate with cross-functional teams including
                        designers, project managers, and backend developers to
                        deliver seamless and accessible user experiences.
                      </li>
                      <li>
                        Optimize site performance, SEO, and Core Web Vitals to
                        ensure top-tier user engagement and search engine
                        visibility.
                      </li>
                      <li>
                        Write clean, maintainable code with a focus on
                        reusability, performance, and industry best practices.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full pt-5">
                  <div className="w-1/4">
                    <h3 className="font-semibold uppercase">Halcyon Agile</h3>
                    <span className="text-sm text-gray-600 uppercase">
                      July 2021 - JULY 2024
                    </span>
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-semibold uppercase">
                      Front End Developer
                    </h4>
                    <ul className="list-disc list-inside text-white">
                      <li>
                        Develop and maintain responsive, high-performance web
                        applications using Next.js, React, and modern
                        frameworks.
                      </li>
                      <li>
                        Collaborate with cross-functional teams including
                        designers, project managers, and backend developers to
                        deliver seamless and accessible user experiences.
                      </li>
                      <li>
                        Integrate headless CMS solutions (e.g., Contentful,
                        Sanity) to enable scalable and flexible content
                        management.
                      </li>
                      <li>
                        Optimize site performance, SEO, and Core Web Vitals to
                        ensure top-tier user engagement and search engine
                        visibility.
                      </li>
                      <li>
                        Write clean, maintainable code with a focus on
                        reusability, performance, and industry best practices.
                      </li>
                      <li>
                        Contribute to code reviews, documentation, and agile
                        development processes to support a high-quality delivery
                        pipeline.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full pt-5">
                  <div className="w-1/4">
                    <h3 className="font-semibold uppercase">
                      Ajio IT Solutions
                    </h3>
                    <span className="text-sm text-gray-600 uppercase">
                      OCTOBER 2020 - June 2021
                    </span>
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-semibold uppercase">Web Developer</h4>
                    <ul className="list-disc list-inside text-white">
                      <li>
                        Responsible for implementing visual elements that users
                        see and interact with within a web application.
                      </li>
                      <li>
                        Converting the provided design by our client into
                        responsive web design.
                      </li>
                      <li>Maintaining and improving website</li>
                      <li>
                        Write clean, maintainable code with a focus on
                        reusability, performance, and industry best practices.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full pt-5">
                  <div className="w-1/4">
                    <h3 className="font-semibold uppercase">TBL Technerds</h3>
                    <span className="text-sm text-gray-600 uppercase">
                      August 2019 - December 2019
                    </span>
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-semibold uppercase">
                      Front End Developer
                    </h4>
                    <ul className="list-disc list-inside text-white">
                      <li>
                        Using markup languages like HTML to create user-friendly
                        web pages
                      </li>
                      <li>
                        Converting the provided design by our client into
                        responsive web design.
                      </li>
                      <li>Maintaining and improving website.</li>
                      <li>Optimizing applications for maximum speed.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="flex flex-col bg-white p-10">
            <div className="container">
              <h2 className="text-4xl font-semibold ">Portfolio</h2>
              <hr className="border-2 border-[#0073aa] w-[50px] mb-4" />
              <p className="text-gray-700">Showcase your work here...</p>
            </div>
          </section>

          <section id="contact" className="flex flex-col bg-[#1e3a5f]">
            <div className="container">
              <div className="flex w-full">
                <div className="w-1/2 p-10">
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
                          className="border border-white text text-white font-semibold py-3 px-8 rounded-md transition cursor-pointer hover:bg-white hover:text-[#1e3a5f]"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/2 justify-between">
                  <div className="flex flex-col p-10 text-white">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsam, delectus provident laboriosam accusantium explicabo
                      ipsa. Commodi nesciunt a dolorum officia quo
                      necessitatibus eveniet ullam ipsam, magnam animi, natus
                      sint quasi.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg p-3 rounded-full bg-white text-[#1e3a5f]">
                          <FaPhone size={24} />
                        </span>
                        <span className="text-white">09953543834</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg p-3 rounded-full bg-white text-[#1e3a5f]">
                          <FaEnvelope size={24} />
                        </span>
                        <span className="text-white flex-wrap text-center">
                          vince.quinaging @gmail.com
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg p-3 rounded-full bg-white text-[#1e3a5f]">
                          <IoLocationSharp size={24} />
                        </span>
                        <span className="text-white text-center">
                          Camolinas Poblacion Cordova Cebu
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.129202832543!2d123.9514341!3d10.251162099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5406c22fd%3A0x9af2ac4715d5cc0c!2sCamolinas%20Chapel!5e0!3m2!1sen!2sph!4v1761381317909!5m2!1sen!2sph"
                      className="w-full"
                      height="350"
                      allowfullscreen=""
                      loading="lazy"
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
