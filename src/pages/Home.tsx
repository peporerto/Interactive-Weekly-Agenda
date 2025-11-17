// src/pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/context/I18nContext";


export const HomePage = () => {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("welcome")}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t("improveSkills")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button className="text-lg px-6 py-3" onClick={() => (window.location.href = "/login")}>
          {t("getStarted")}
        </Button>
      </motion.div>
    </section>
  );
};
