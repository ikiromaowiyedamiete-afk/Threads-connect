import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import RegisterForm from "../components/auth/RegisterForm";
import AuthFooter from "../components/auth/AuthFooter";

export default function Register() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Create Account"
        subtitle="Join Threads Connect today"
      />

      <RegisterForm />

      <AuthFooter
        text="Already have an account?"
        linkText="Login"
        link="/login"
      />
    </AuthLayout>
  );
}