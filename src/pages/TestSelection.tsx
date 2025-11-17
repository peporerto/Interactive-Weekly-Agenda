// src/pages/TestSelection.tsx
import React from "react";
import { useI18n } from "@/context/I18nContext";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export const TestSelectionPage = () => {
  const { t } = useI18n();

  // Datos de ejemplo
  const tests = [
    { id: 1, name: "Soft Skills Test" },
    { id: 2, name: "Technical Skills Test" },
  ];

  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">{t("selectTest")}</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className="border rounded-md p-4 bg-gray-100 dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">{test.name}</h2>
            <Link to={`/tests/${test.id}`}>
              <Button>{t("startTest")}</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
