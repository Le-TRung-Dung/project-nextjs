"use client"
import { useAuth } from "@clerk/nextjs";
import Header from "../pages/header";
import HeaderBlog from "../pages/headerBlog";
import { useEffect, useState } from "react";

export default function P() {
  const { getToken } = useAuth();
  console.log(getToken)
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchToken = async () => {
      const jwt = await getToken();
      setToken(jwt);
      console.log("Token:", jwt); // Debug token
    };

    fetchToken();
  }, [getToken]);

    return (
      <div className="text-black">
        <HeaderBlog />
      </div>
    );
  }