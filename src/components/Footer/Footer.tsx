import React from "react";
import { Typography } from "../../app/material-tailwind";
import { Tajawal } from "next/font/google";
import { useTranslation } from "react-i18next";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

type Props = {};

const facebookIcon = (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      className="icon"
      fill-rule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clip-rule="evenodd"
    />
  </svg>
);

const instagramIcon = (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      className="icon"
      fill-rule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clip-rule="evenodd"
    />
  </svg>
);

const currentYear = new Date().getFullYear();

export default function Footer({}: Props) {
  const { t, i18n } = useTranslation();

  const LINKS = [
    {
      title: t("go to"),
      items: [
        { icon: "", label: t("home-nav"), link: "/" },
        { icon: "", label: t("events-nav"), link: "/events" },
        { icon: "", label: t("our community-nav"), link: "/blogs" },
        { icon: "", label: t("about us-nav"), link: "/about" },
      ],
    },
    {
      title: t("follow us"),
      items: [
        {
          icon: facebookIcon,
          label: "clean iraq",
          link: "https://www.facebook.com/clean.iraq",
        },
        {
          icon: instagramIcon,
          label: "@clean.iraq",
          link: "https://www.instagram.com/clean.iraq/",
        },
      ],
    },
    {
      title: t("contact us-nav"),
      items: [{ icon: "", label: "example@email.com", link: "/" }],
    },
  ];

  return (
    <footer className="relative w-full bg-[#0D1E0B] pt-[2rem]">
      <div className=" w-full px-8">
        <div
          className="container mx-auto grid grid-cols-1 justify-between gap-4 md:grid-cols-2"
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <Typography
            as="a"
            href="/"
            className="w-[140px] h-[140px] cursor-pointer  font-medium"
          >
            <img
              src="/assets/logo.png"
              className="object-contain w-full h-full"
              alt="سفراء النظافة"
            />
          </Typography>
          <div
            className="grid grid-cols-3 justify-between gap-4"
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className={`mb-3 text-[#E3AB5D] font-bold ${tajawal.className}`}
                >
                  {title}
                </Typography>
                {items.map(({ label, link, icon }) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href={link}
                      color="gray"
                      className={`py-1.5 font-normal flex items-center text-white transition-colors hover:text-gray-400 ${tajawal.className}`}
                    >
                      <span className="ml-2">{icon && icon}</span>
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className={`mb-4 text-center font-normal text-gray-400 opacity-45 md:mb-0 ${tajawal.className}`}
          >
            &copy; {currentYear} <a href="#">clean iraq</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-gray-400 opacity-45 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {facebookIcon}
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {instagramIcon}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
