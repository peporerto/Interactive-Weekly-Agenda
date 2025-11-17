// src/pages/TestDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useI18n } from "@/context/I18nContext";
import { Button } from "@/components/ui/Button";

export const TestDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();

  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">
        {t("testDetail")} #{id}
      </h1>
      <p className="mb-6">{t("testInstructions")}</p>
      <Button>{t("startTest")}</Button>
    </section>
  );
};
