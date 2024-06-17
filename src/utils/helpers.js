"use client";

import { useEffect, useState } from "react";

export function authUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const getUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      
      if(res.status===200){

        setUser(data);

      }else{

        const refreshRes = await fetch("/api/auth/refresh");

        if(refreshRes.status === 200){
          
          const res = await fetch("/api/auth/me");

          const data = await res.json();
          setUser(data);

        }else{
          return setUser(null);
        }
      }
    };

    getUser();
  }, []);
  
  return user;
}
