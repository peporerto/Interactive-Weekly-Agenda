import React, { useEffect, useState } from "react";
import { getUserProfile } from "@/api/userService";
import { useI18n } from "@/context/I18nContext";

export const Profile: React.FC = () => {
  const { t } = useI18n();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    getUserProfile().then(setProfile);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{t("profile")}</h2>
      <p>{t("name")}: {profile.name}</p>
      <p>{t("email")}: {profile.email}</p>
    </div>
  );
};
