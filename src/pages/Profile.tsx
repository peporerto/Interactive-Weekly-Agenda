// src/pages/Profile.tsx
import React from "react";
import { useI18n } from "@/context/I18nContext";
import { Button } from "@/components/ui/Button";

export const ProfilePage = () => {
  const { t } = useI18n();

  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">{t("profile")}</h1>
      <p>{t("profileInfo")}</p>
      <Button>{t("editProfile")}</Button>
    </section>
  );
};
