import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTestDetail } from "@/api/testService";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/context/I18nContext";

export const TestDetail: React.FC = () => {
  const { t } = useI18n();
  const { id } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState<any>(null);

  useEffect(() => {
    if (id) getTestDetail(id).then(setTest);
  }, [id]);

  if (!test) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{test.title}</h2>
      <p className="mb-4">{t("testInstructions")}</p>
      {test.questions.map((q:any) => (
        <div key={q.id} className="mb-2">{q.question}</div>
      ))}
      <Button onClick={() => navigate(`/results/${test.id}`)}>{t("startTest")}</Button>
    </div>
  );
};
