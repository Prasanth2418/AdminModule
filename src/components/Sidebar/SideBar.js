import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUser,
  FaStore,
  FaEdit,
  FaInfo,
} from "react-icons/fa";
import { BiFoodMenu, BiCog, BiCategoryAlt, BiLogOut, BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { ImUsers } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { MdFoodBank,MdStore } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri"
import { BsCartCheck } from "react-icons/bs";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./sideBar.css"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <ImUsers />,
    subRoutes: [
      {
        path: "/users",
        name: "Users ",
        icon: <FaUser />,
      },
      {
        path: "/addUser",
        name: "Add User",
        icon: <TiUserAdd />,
      },
      {
        path: "/editUser",
        name: "Edit User",
        icon: <FaEdit />,
      },
    ],
  },
  
  {
    path: "/category",
    name: "Category",
    icon: <BiCategoryAlt />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <BiFoodMenu />,
    subRoutes: [
      {
        path: "/products",
        name: "Products ",
        icon: <MdFoodBank />,
      },
      {
        path: "/addProduct",
        name: "Add Product ",
        icon: <RiProductHuntLine />,
      },
      {
        path: "/editProduct",
        name: "Edit Product",
        icon: <FaEdit />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/restaurantInfo",
    name: "Restaurant List",
    icon: <FormatListBulletedIcon />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <CgProfile />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
  },
  {
    path: "*",
    name: "Log Out",
    icon: <BiLogOut />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h5>&nbsp;&nbsp;&nbsp;Menu</h5>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
