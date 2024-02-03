import React, { useEffect, useRef, useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';

const NavBar = () => {
  const [currUser, setCurrUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const ft = useRef(null);
  const handleClick = () => {
    ft.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost:5000/api/v1/users/1")
    // .then((res) => res.json())
    // .then((data) => {
    //     setCurrUser(data)
    //     document.cookie = "LOGIN_INFO=" + data.token + ";max-age=60*60;path=/"
    //     setLoggedIn(true)
    // })
    // .catch((err) => console.log(err))
  }, []);

  const scrollToComponent = (e) => {
    // e.preventDefault();
    console.log('scroll To component ');
  };
  return (
    <div className="flex justify-between px-10 py-3 font-normal items-center font-bricolage">
      <a href="/">
        <img className="w-40 h-10 mr-2" src="/be-well.png" alt="logo" />
      </a>

      <div className="flex gap-8 text-base">
        <a href="/patientDashboard/diagnosis">
          <div
            className={
              'font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer '
            }
            onClick={scrollToComponent}
          >
            Home
          </div>
        </a>
        <div
          className={
            'font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer '
          }
          onClick={handleClick}
        >
          Features
        </div>
        <div
          className={
            'font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer '
          }
          onClick={scrollToComponent}
        >
          Mission
        </div>
        <div
          className={
            'font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer '
          }
          onClick={scrollToComponent}
        >
          FAQs
        </div>
        <a href="https://www.github.com/geekguyadarsh">
          <div
            className={
              'font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer '
            }
          >
            Github
          </div>
        </a>
      </div>
      <div className="user">
        <div className="flex p-3 rounded-2xl border-2 border-[#0f0f11]">
          {loggedIn && (
            <div className="flex gap-5 items-center">
              <div className="rounded-2xl bg-gray-300">
                <div className="h-10 w-10 bg-gradient-to-b from-[#d13636] to-[#d9d9d9] rounded-xl"></div>
              </div>

              <div className="font-medium opacity-65">
                {currUser.fullName}
                {/* Janmejay Chatterjee */}
              </div>
              <CiMenuKebab className="text-secondary" />
            </div>
          )}
          {!loggedIn && (
            <div className="flex gap-2 justify-between items-center">
              <a
                href="https://www.github.com/geekguyadarsh"
                className="cursor-pointer"
              >
                <FaGithub size={30}></FaGithub>
              </a>
              <a href="/login">
                <div className="border-2 border-white p-2 rounded-xl">
                  {' '}
                  Get Started{' '}
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
