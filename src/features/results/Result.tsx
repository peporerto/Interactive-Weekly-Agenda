import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResult } from "@/api/aiService"; 
import { useI18n } from "@/context/I18nContext";

export const Result: React.FC = () => {
  const { t } = useI18n();
  const { id } = useParams();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (id) getResult(id).then(setResult);
  }, [id]);

  if (!result) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{t("testResult")}</h2>
      <p>Score: {result.score}</p>
      <p>{result.analysis}</p>
    </div>
  );
};
