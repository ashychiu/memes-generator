import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <span>
        Ashley Chiu &copy; 2021 |{' '}
        <a
          href="https://github.com/ashychiu/memes-generator"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
      </span>
    </footer>
  );
}

export default Footer;
