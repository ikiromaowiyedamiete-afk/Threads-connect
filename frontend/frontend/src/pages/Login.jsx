import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "../components/auth/LoginForm";
import AuthFooter from "../components/auth/AuthFooter";

export default function Login() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Welcome Back"
        subtitle="Login to continue to Threads Connect"
      />

      <LoginForm />

      <AuthFooter
        text="Don't have an account?"
        linkText="Register"
        link="/register"
      />
    </AuthLayout>
  );
}