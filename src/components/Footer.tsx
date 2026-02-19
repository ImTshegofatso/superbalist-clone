import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "ABOUT SUPERBALIST",
      links: ["Our Story", "Careers", "Sustainable Style", "Brands"],
    },
    {
      title: "CUSTOMER SERVICE",
      links: [
        "Help Center",
        "Returns & Refunds",
        "Delivery Information",
        "Size Guide",
      ],
    },
    {
      title: "MY ACCOUNT",
      links: [
        "Sign In / Register",
        "Order History",
        "Track My Order",
        "Wishlist",
      ],
    },
  ];

  const resolvePath = (label: string) => {
    const map: Record<string, string> = {
      "Our Story": "/our-story",
      Careers: "/careers",
      "Sustainable Style": "/sustainable-style",
      Brands: "/brands",

      "Help Center": "/help-center",
      "Returns & Refunds": "/returns-refunds",
      "Delivery Information": "/delivery-info",
      "Size Guide": "/size-guide",

      "Sign In / Register": "/sign-in",
      "Order History": "/order-history",
      "Track My Order": "/track-order",
      Wishlist: "/wishlist",
    };

    return map[label] ?? "/";
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold tracking-wider mb-4 text-black">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={resolvePath(link)}
                      className="text-gray-500 text-sm hover:text-black transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 mt-8">

          {/* LEFT: Social Icons */}
          <div className="flex space-x-6">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
          </div>

          {/* RIGHT: Copyright */}
          <p className="text-gray-400 text-xs mt-6 md:mt-0 md:ml-auto text-right">
            © {new Date().getFullYear()} Superbalist.com. All rights reserved. Built for showcase.
          </p>

        </div>
      </div>
    </footer>
  );
};