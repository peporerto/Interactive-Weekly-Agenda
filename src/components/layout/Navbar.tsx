// src/components/layout/Navbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import { useI18n } from "@/context/I18nContext";
import { motion, AnimatePresence } from "framer-motion";

const NavLinkItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-2 py-1 rounded-md transition-colors ${
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [openMobile, setOpenMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // temporal / reemplazar con store

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Nav */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 dark:text-blue-300 transition-colors"
            >
              SoftSkill
            </Link>
            <nav className="hidden md:flex gap-3 items-center">
              <NavLinkItem to="/">{t("home")}</NavLinkItem>
              <NavLinkItem to="/tests">{t("tests")}</NavLinkItem>
              {isLoggedIn && <NavLinkItem to="/profile">{t("profile")}</NavLinkItem>}
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileTap={{ rotate: 90, scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaSun className="text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaMoon className="text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Language selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "es")}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md transition-colors"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpenMobile((s) => !s)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {openMobile ? <FaTimes /> : <FaBars />}
            </button>

            {/* Auth buttons */}
            <div className="hidden md:flex gap-2">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <Button className="text-sm">{t("login")}</Button>
                  </Link>
                  <Link to="/register">
                    <Button className="text-sm">{t("register")}</Button>
                  </Link>
                </>
              ) : (
                <Button onClick={() => setIsLoggedIn(false)}>{t("logout")}</Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              <Link to="/" onClick={() => setOpenMobile(false)}>
                {t("home")}
              </Link>
              <Link to="/tests" onClick={() => setOpenMobile(false)}>
                {t("tests")}
              </Link>
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setOpenMobile(false)}>
                    {t("login")}
                  </Link>
                  <Link to="/register" onClick={() => setOpenMobile(false)}>
                    {t("register")}
                  </Link>
                </>
              ) : (
                <Link to="/profile" onClick={() => setOpenMobile(false)}>
                  {t("profile")}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
