import { useState } from "react";
import { Mail } from "lucide-react";
import LoginForm from "./partials/LoginForm";
import RegisterForm from "./partials/RegisterForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      <div
        className="min-h-screen w-full md:w-1/2 p-8 flex flex-col md:flex-row relative"
        style={{
          backgroundImage: "url(/chatDoodle.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-white p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-white-500/20 p-4 rounded-full">
                <Mail className="size-10 text-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">
              Welcome to Chatty
            </h1>
            <p>
              Connect with friends and family, anytime and anywhere
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm opacity-80">
              Join thousands of users today!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        {isLogin ? (
          <div className="w-full md:w-[400px]">
            <LoginForm onSwitch={() => setIsLogin(false)} />
          </div>
        ) : (
          <div className="w-full md:w-[400px]">
            <RegisterForm onSwitch={() => setIsLogin(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
