import React from 'react';
import './footer.css';
import  logo from '../assets/logo.png'

function Footer() {
  const logo_mays = (
    <img src={logo} className="footer-img-logo"/>
    )
  return (
    <footer className="footer-content-section">
      <div className="footer-container">
        <div className="footer-left-container">
          <a className="footer-logo" 
          href="https://student.labranet.jamk.fi/~AB0168/web_technologies/MyProject/main.html"
          target="_blank">
             {logo_mays} 

          </a>
          <p className="footer-p">
            Where communication between employer and employees starts.
          </p>
          <ul className="footer-media">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  width="38"
                >
                  <path d="M7 5c-1.094 0-2 .906-2 2v18c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2V7c0-1.094-.906-2-2-2zm0 2h18v18h-5.188v-6.75h2.594l.375-3h-2.968v-1.938c0-.874.214-1.468 1.468-1.468h1.625V9.125c-.277-.035-1.238-.094-2.343-.094-2.305 0-3.875 1.387-3.875 3.969v2.25h-2.625v3h2.624V25H7z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  width="38"
                >
                  <path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5zm0 2h9.062A4.463 4.463 0 0 1 25 11.469v9.062A4.463 4.463 0 0 1 20.531 25H11.47A4.463 4.463 0 0 1 7 20.531V11.47A4.463 4.463 0 0 1 11.469 7zm10.437 2.188a.902.902 0 0 0-.906.906c0 .504.402.906.906.906a.902.902 0 0 0 .907-.906.902.902 0 0 0-.907-.906zM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mays-alazzawi/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  width="38"
                >
                  <path d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  width="38"
                >
                  <path d="M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0 1 26.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 0 1-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 0 1 5.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 0 1 1.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  width="38"
                >
                  <path d="M28 8.559a9.813 9.813 0 0 1-2.828.773 4.94 4.94 0 0 0 2.164-2.723 9.92 9.92 0 0 1-3.125 1.196 4.924 4.924 0 0 0-8.52 3.367c0 .387.043.762.13 1.121A13.957 13.957 0 0 1 5.67 7.148a4.885 4.885 0 0 0-.667 2.477c0 1.707.867 3.215 2.191 4.098a4.895 4.895 0 0 1-2.23-.618v.063a4.922 4.922 0 0 0 3.95 4.828 4.902 4.902 0 0 1-2.224.086 4.932 4.932 0 0 0 4.598 3.422A9.875 9.875 0 0 1 4 23.539a13.924 13.924 0 0 0 7.547 2.215c9.058 0 14.012-7.504 14.012-14.012 0-.21-.008-.426-.016-.637A10.085 10.085 0 0 0 28 8.56z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <br/>
        </div>
        <div className="footer-right-container">
          <div className="footer-contact-content">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <p>Mays AL-Azzawi</p>
              <li className="footer-contact-li">
                <a href="mailto:Info.mays@stu.com">Info.mays@stu.com
                  
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      
      <div className="footer-gdpr">
      
        <p className="footer-copyright-p">© 2022 Mays_Web</p>
      </div>
       
     
    </footer>
  );
}

export default Footer;
