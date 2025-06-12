import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>The Contacts app welcomes you!</h2>
      <p className={css.text}>
        Welcome to your personal contact manager - a convenient and secure
        application for storing important information about people.
      </p>
      <p className={css.text}>
        In the app, you can add new contacts with names and phone numbers,
        and quickly find the right person using a convenient search.
        You can delete contacts in one click, and the data is securely stored
        on the server.
      </p>
    </div>
  );
}