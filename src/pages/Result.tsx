// src/pages/Result.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useI18n } from "@/context/I18nContext";

export const ResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();

  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">{t("testResult")} #{id}</h1>
      <p>{t("resultMessage")}</p>
    </section>
  );
};
