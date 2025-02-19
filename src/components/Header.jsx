import { motion, useTransform, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.8]);

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: "none",
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
    },
  };

  return (
    <div>
      <motion.nav
        style={{ opacity: navOpacity }}
        className="p-2 md:p-4 top-0 z-50 backdrop-blur-sm relative"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <a href="/" className="no-underline">
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                },
              }}
            >
              {/* <img
                src="/logo.png"
                alt="logo"
                className="top-0 left-0 h-6 w-28 sm:h-10 sm:w-48"
              /> */}
              <div className="text-gray-900 Agraham pt-4">DRIPPIT</div>
            </motion.div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="no-underline">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#000",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 cursor-pointer"
              >
                Features
              </motion.span>
            </a>

            <a href="/curations" className="no-underline">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#000",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 cursor-pointer"
              >
                Curations
              </motion.span>
            </a>

            <a href="/faq" className="no-underline">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#000",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 cursor-pointer"
              >
                FAQ
              </motion.span>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <a href="/hero" className="hidden md:block no-underline">
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-6 py-3 rounded-2xl"
            >
              <span className="font-semibold text-lg tracking-wide whitespace-nowrap">
                Get Early Access
              </span>
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl md:hidden"
        >
          <div className="flex flex-col p-4 gap-4">
            <a href="/" className="no-underline">
              <motion.span
                whileHover={{
                  x: 10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 text-lg block py-2"
              >
                Features
              </motion.span>
            </a>
            <a href="/curations" className="no-underline">
              <motion.span
                whileHover={{
                  x: 10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 text-lg block py-2"
              >
                Curations
              </motion.span>
            </a>
            <a href="/faq" className="no-underline">
              <motion.span
                whileHover={{
                  x: 10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-gray-400 text-lg block py-2"
              >
                FAQ
              </motion.span>
            </a>
            <a href="/hero" className="no-underline">
              <motion.button
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-900 text-white py-3 rounded-xl text-lg font-semibold"
              >
                Get Early Access
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Header;