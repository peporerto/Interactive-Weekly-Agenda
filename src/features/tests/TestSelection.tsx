import React, { useEffect, useState } from "react";
import { getTests } from "@/api/testService";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/context/I18nContext";

export const TestSelection: React.FC = () => {
  const { t } = useI18n();
  const [tests, setTests] = useState<{id:string,title:string}[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTests().then(setTests);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{t("selectTest")}</h2>
      <ul className="space-y-2">
        {tests.map(test => (
          <li key={test.id} className="p-3 border rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => navigate(`/tests/${test.id}`)}>
            {test.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
