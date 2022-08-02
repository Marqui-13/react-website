import React from "react";

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
          <h3 className=' flex justify-center'>Made by <a href='https://github.com/Marqui-13' className='text-[#15a8fd]' target='_blank' rel='noreferrer'>&nbsp;Marqui&nbsp;</a>&nbsp;⚬&nbsp;Built with <a href='https://reactjs.org/' className='text-[#15a8fd]' target='_blank' rel='noreferrer'>&nbsp;React JS&nbsp;</a> + <a href='https://tailwindcss.com/' className='text-[#15a8fd]' target='_blank' rel='noreferrer'>&nbsp;TailwindCSS&nbsp;</a></h3>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
