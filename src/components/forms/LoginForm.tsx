import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { login} from "@/api/userService";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login( email, password );
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm mx-auto">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};
