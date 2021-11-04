import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content-wrapper">
        <div className="links">
          <a href="https://github.com/dpavloff">Support</a>
          <a href="https://github.com/dpavloff">Learning</a>
          <a href="https://github.com/dpavloff">Russian version</a>
        </div>
        <div className="copyright">
          <p>
            © 2021{" "}
            <a href="https://github.com/dpavloff" target="_blank" rel="noreferrer">
              @dpavloff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
