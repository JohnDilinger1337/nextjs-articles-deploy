import headerSyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerSyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerSyles.description}>
        Keep up to date with latest web dev news!
      </p>
    </div>
  );
};

export default Header;
