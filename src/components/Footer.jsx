import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="links">
        <a>Support</a>
        <a>Learning</a>
        <a>Русская версия</a>
      </div>
      <div className="copyright">
        <p>
          © 2021{" "}
          <a href="https://github.com/dpavloff" target="_blank">
            @dpavloff
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
