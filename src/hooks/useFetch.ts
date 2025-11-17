// src/hooks/useFetch.ts
import { useEffect, useState } from "react";
import { http } from "@/api/http";

export const useFetch = <T>(url: string, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await http.get<T>(url);
        setData(data);
      } catch (err: any) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, deps);

  return { data, loading, error };
};
