import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import SolidButtonBig from '../components/solid-button-big'

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page-container">
        <Head>
          <title>retuned.ch</title>
          <meta property="og:title" content="retuned.ch" />
        </Head>
        <div className="landing-page-top-container">
          <nav data-role="Header" className="landing-page-navbar">
            <Link href="/">
              <a className="landing-page-link">
                <h1 className="landing-page-logo link">retuned.ch</h1>
              </a>
            </Link>
            <div className="landing-page-right-side">
              <div className="landing-page-links-container">
                <a href="#about-section" className="landing-page-link01 link">
                  About us
                </a>
              </div>
              <a href="#contact" className="landing-page-link02">
                <SolidButton button="Contact"></SolidButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="landing-page-burger-menu">
              <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="landing-page-mobile-menu">
              <div className="landing-page-nav">
                <div className="landing-page-top">
                  <h1>Travel</h1>
                  <div
                    data-role="CloseMobileMenu"
                    className="landing-page-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="landing-page-icon03"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="landing-page-right-side1">
                  <div className="landing-page-links-container1">
                    <span className="landing-page-text">Home</span>
                    <span className="landing-page-text01">About</span>
                    <span className="landing-page-text02">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <a href="#main-section" className="landing-page-link03">
                    <SolidButton button="Explore places"></SolidButton>
                  </a>
                </div>
              </div>
              <div className="landing-page-follow-container">
                <span className="landing-page-text04">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="landing-page-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link04"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-page-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link05"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="landing-page-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link06"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="landing-page-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="about-section" className="landing-page-about-us">
          <h1 className="landing-page-text05">About us</h1>
          <span className="landing-page-text06">
            soul / funk / blues / pop band aus burgdorf
          </span>
          <div className="landing-page-container1">
            <span className="landing-page-text07">
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
        <div id="contact" className="landing-page-contact">
          <span className="landing-page-text08">
            Wir freuen uns auf weitere konzerte und Auftritte
          </span>
          <h1 className="landing-page-text09">Anfragen</h1>
          <a
            href="mailto:contact@retuned.ch?subject="
            className="landing-page-link07"
          >
            <SolidButtonBig
              button="contact@retuned.ch"
              rootClassName="solid-button-big-root-class-name"
              className="landing-page-component2"
            ></SolidButtonBig>
          </a>
        </div>
        <div className="landing-page-footer">
          <div className="landing-page-menu">
            <Link href="/">
              <a className="landing-page-link08">
                <h1 className="landing-page-logo2 link">retuned.ch</h1>
              </a>
            </Link>
            <div className="landing-page-links-container2">
              <div className="landing-page-container2">
                <Link href="/impressum">
                  <a className="landing-page-link09 link">Impressum</a>
                </Link>
              </div>
            </div>
            <div className="landing-page-follow-container1"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-page-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-page-top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJhbmR8ZW58MHx8fHwxNjc5MTU2ODM3&ixlib=rb-4.0.3&w=1500');
          }
          .landing-page-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link {
            display: contents;
          }
          .landing-page-logo {
            color: #ffffff;
            text-decoration: none;
          }
          .landing-page-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link01 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .landing-page-link02 {
            display: contents;
          }
          .landing-page-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-burger-menu {
            width: 24px;
            height: 24px;
          }
          .landing-page-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .landing-page-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-icon03 {
            width: 24px;
            height: 24px;
          }
          .landing-page-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text {
            margin-bottom: 8px;
          }
          .landing-page-text01 {
            margin-bottom: 8px;
          }
          .landing-page-text02 {
            margin-bottom: 8px;
          }
          .landing-page-link03 {
            display: contents;
          }
          .landing-page-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text04 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .landing-page-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link04 {
            display: contents;
          }
          .landing-page-icon05 {
            width: 24px;
            height: 24px;
          }
          .landing-page-link05 {
            display: contents;
          }
          .landing-page-icon07 {
            width: 24px;
            height: 24px;
          }
          .landing-page-link06 {
            display: contents;
          }
          .landing-page-icon09 {
            width: 24px;
            height: 24px;
          }
          .landing-page-about-us {
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
          .landing-page-text05 {
            color: var(--dl-color-gray-500);
          }
          .landing-page-text06 {
            color: var(--dl-color-gray-500);
          }
          .landing-page-container1 {
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
          .landing-page-text07 {
            color: var(--dl-color-gray-500);
          }
          .landing-page-contact {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 50vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #fbc67f;
          }
          .landing-page-text08 {
            color: #402141;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .landing-page-text09 {
            color: rgb(64, 33, 65);
            font-size: 3rem;
            max-width: 450px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .landing-page-link07 {
            display: contents;
          }
          .landing-page-component2 {
            text-decoration: none;
          }
          .landing-page-footer {
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
          .landing-page-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link08 {
            display: contents;
          }
          .landing-page-logo2 {
            text-decoration: none;
          }
          .landing-page-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .landing-page-link09 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-follow-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .landing-page-right-side {
              display: none;
            }
            .landing-page-burger-menu {
              display: flex;
            }
            .landing-page-about-us {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .landing-page-contact {
              padding-left: 32px;
              padding-right: 32px;
            }
            .landing-page-menu {
              flex-direction: column;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .landing-page-contact {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .landing-page-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .landing-page-link09 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LandingPage
