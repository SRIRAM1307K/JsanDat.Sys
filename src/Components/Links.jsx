import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Links = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gray-50 mb-5 lg:mt-15 py-12 px-6 md:px-16 max-w-7xl mx-auto rounded-2xl"
      style={{
        boxShadow: "0 0 10px 4px #FE0000",
      }} // rebeccapurple shadow
    >
      <motion.div
        className="flex flex-col md:flex-row justify-around items-center md:items-start gap-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Company Links */}
        <motion.div
          className="flex flex-col items-center md:items-start md:text-left space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-extrabold text-purple-700">Company</h1>

          {["About", "Services", "Features", "Contact"].map((link, idx) =>
            link === "About" ? (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  to="/about"
                  className="text-xl text-gray-700 hover:text-rebeccapurple hover:underline transition-transform duration-200"
                >
                  About
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={idx}
                href={
                  link === "Contact" ? "/contact" : `#${link.toLowerCase()}`
                }
                className="text-xl text-gray-700 hover:text-rebeccapurple hover:underline transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            )
          )}
        </motion.div>

        {/* Address */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 text-gray-700"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
            Address
          </h1>
          <p className="text-lg">Sivagurunathan Nagar,</p>
          <p className="text-lg">Dr. Moorthy road,</p>
          <p className="text-lg">Kumbakonam-612001,</p>
          <p className="text-lg">Tamil Nadu.</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-extrabold text-purple-700">Follow Us</h1>
          <div className="flex space-x-6 text-purple-700 text-4xl md:text-5xl">
            {[
              {
                icon: <FaEnvelope />,
                url: "mailto:jsandatsys@datsys.in",
                label: "Email",
              },
              {
                icon: <FaInstagram />,
                url: "https://www.instagram.com/esekiyel_peter95",
                label: "Instagram",
              },
              {
                icon: <FaFacebook />,
                url: "https://www.facebook.com/people/DatSys-solutions/100085609516905/#",
                label: "Facebook",
              },
              {
                icon: <FaTwitter />,
                url: "https://x.com/datsysinfo",
                label: "Twitter",
              },
            ].map(({ icon, url, label }, idx) => (
              <motion.a
                key={idx}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                whileHover={{ scale: 1.2, color: "#663399" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Links;
