import React from "react";
import logo from "../../../public/logoAoron.png";
import { NavLink, Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer >
        <div className="pt-10 bg-gray-200">
          <div className="container m-auto grid grid-cols-4 gap-8">
            <div className="space-y-4">
            <Link to="/">
              <div className="w-20 mb-4">
                <img src={logo} alt="logo" />
              </div>
              </Link>
              <p className="text-sm text-gray-500 text-muted-foreground ">
                Premium quality menswear focused on exceptional materials and
                perfect fit.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider">
                Shop
              </h4>
              <ul className="flex mt-1.5 flex-col gap-1.5">
                <li className="text-gray-500">
                  {<NavLink to={"/catalog"}>View All Products</NavLink>}
                </li>
                <li className="text-gray-500">
                  {<NavLink to={"/catalog"}>Suits</NavLink>}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="flex mt-1.5 flex-col gap-1.5">
                <li className="text-gray-500">
                  {<NavLink to={"/about"}>About</NavLink>}
                </li>
                <li className="text-gray-500">
                  {<NavLink to={"/contact"}>Contact</NavLink>}
                </li>
                <li className="text-gray-500">
                  {<NavLink to={"/news"}>Privacy Policy</NavLink>}
                </li>
                <li className="text-gray-500">
                  {<NavLink to={"/terms"}>Delivery terms</NavLink>}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm my-2.5 text-gray-500 text-muted-foreground">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex">
                <input
                  type="email"
                  className="w-full px-3 py-1 sm:text-base border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="flex py-1 items-center justify-center bg-gray-700 text-primary-foreground px-4  rounded-r-md hover:bg-primary/90 transition-colors">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="container m-auto py-4 bg-gray-200">< hr />
          <p className="text-xs mt-4 text-gray-500 text-muted-foreground">© 2025 AORON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
