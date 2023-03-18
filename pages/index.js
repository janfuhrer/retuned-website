import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import SolidButtonBig from '../components/solid-button-big'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>retuned.ch</title>
          <meta property="og:title" content="retuned.ch" />
        </Head>
        <div className="home-top-container">
          <nav data-role="Header" className="home-navbar">
            <Link href="/">
              <a className="home-link">
                <h1 className="home-logo link">retuned.ch</h1>
              </a>
            </Link>
            <div className="home-right-side">
              <div className="home-links-container">
                <a href="#about-section" className="home-link1 link">
                  About us
                </a>
              </div>
              <a href="#contact" className="home-link2">
                <SolidButton button="Contact"></SolidButton>
              </a>
            </div>
          </nav>
        </div>
        <div id="about-section" className="home-about-us">
          <h1 className="home-text3">About us</h1>
          <span className="home-text4">
            soul / funk / blues / pop band aus burgdorf
          </span>
          <div className="home-container1">
            <span className="home-text5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </span>
          </div>
        </div>
        <div id="contact" className="home-contact">
          <span className="home-text6">
            Wir freuen uns auf weitere konzerte und Auftritte
          </span>
          <h1 className="home-text7">Anfragen</h1>
          <a href="mailto:contact@retuned.ch?subject=" className="home-link3">
            <SolidButtonBig
              button="contact@retuned.ch"
              rootClassName="solid-button-big-root-class-name"
              className="home-component1"
            ></SolidButtonBig>
          </a>
        </div>
        <div className="home-footer">
          <div className="home-menu">
            <Link href="/">
              <a className="home-link4">
                <h1 className="home-logo2 link">retuned.ch</h1>
              </a>
            </Link>
            <div className="home-links-container2">
              <div className="home-container2">
                <Link href="/impressum">
                  <a className="home-link5 link">Impressum</a>
                </Link>
              </div>
            </div>
            <div className="home-follow-container"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJhbmR8ZW58MHx8fHwxNjc5MTU2ODM3&ixlib=rb-4.0.3&w=1500');
          }
          .home-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            color: #ffffff;
            text-decoration: none;
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link1 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link2 {
            display: contents;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon3 {
            width: 24px;
            height: 24px;
          }
          .home-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text {
            margin-bottom: 8px;
          }
          .home-text1 {
            margin-bottom: 8px;
          }
          .home-about-us {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .home-text3 {
            color: var(--dl-color-gray-500);
          }
          .home-text4 {
            color: var(--dl-color-gray-500);
          }
          .home-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1000px;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text5 {
            color: var(--dl-color-gray-500);
          }
          .home-contact {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 50vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #fbc67f;
          }
          .home-text6 {
            color: #402141;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-text7 {
            color: rgb(64, 33, 65);
            font-size: 3rem;
            max-width: 450px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .home-link3 {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 100;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: center;
            background-color: #402141;
          }
          .home-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link4 {
            display: contents;
          }
          .home-logo2 {
            text-decoration: none;
          }
          .home-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link5 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-follow-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .home-link1 {
              color: var(--dl-color-gray-white);
              z-index: 100;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 767px) {
            .home-right-side {
              display: none;
            }
            .home-about-us {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-contact {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-menu {
              flex-direction: column;
            }
            .home-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-contact {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .home-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 0;
            }
            .home-link5 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
