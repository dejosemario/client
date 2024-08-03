import React from "react";
import WelcomeContent from "../../../components/molecules/WelcomeContent";
import AuthForm from "../../../components/organisms/AuthForm";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:flex hidden">
        <WelcomeContent />
      </div>
      <div className="h-screen flex items-center justify-center">
        <AuthForm />
      </div>
    </div>
  );
}
