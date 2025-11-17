import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

import { login } from "@/api/userService";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/context/I18nContext";
import { useUserStore } from "@/store/userStore";

export const Login: React.FC = () => {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async () => {
    const res = await login(email, password);
    if (res.success) {
      setUser(res.user, res.token);
      navigate("/tests");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{t("login")}</h2>
        <Input label={t("email")} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label={t("password")} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className="mt-4 w-full" onClick={handleSubmit}>{t("login")}</Button>
      </div>
    </div>
  );
};
    