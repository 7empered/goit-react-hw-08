import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.headers}>
      <h2 className={css.title}> Registration your account</h2>
      <RegistrationForm />
    </div>
  );
}