"use client";

import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

function AdminPage() {
  const { loggedIn, handleLogin, handleLogOut } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.replace("/login");
    }
  }, [loggedIn, router]);

  if (!loggedIn) {
    return null;
  }

  return (
    <>
      <PageTitle className="text-white">Admin Panel</PageTitle>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
export default AdminPage;
