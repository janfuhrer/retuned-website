import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'

const Impressum = (props) => {
  return (
    <>
      <div className="impressum-container">
        <Head>
          <title>Impressum - retuned.ch</title>
          <meta property="og:title" content="Impressum - retuned.ch" />
        </Head>
        <div className="impressum-top-container">
          <nav data-role="Header" className="impressum-navbar">
            <Link href="/">
              <a className="impressum-link">
                <h1 className="impressum-logo link">retuned.ch</h1>
              </a>
            </Link>
            <div data-role="BurgerMenu" className="impressum-burger-menu">
              <svg viewBox="0 0 1024 1024" className="impressum-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="impressum-mobile-menu">
              <div className="impressum-nav">
                <div className="impressum-top">
                  <h1>Travel</h1>
                  <div
                    data-role="CloseMobileMenu"
                    className="impressum-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="impressum-icon03">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="impressum-right-side">
                  <div className="impressum-links-container">
                    <span className="impressum-text">Home</span>
                    <span className="impressum-text01">About</span>
                    <span className="impressum-text02">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <a href="#main-section" className="impressum-link1">
                    <SolidButton button="Explore places"></SolidButton>
                  </a>
                </div>
              </div>
              <div className="impressum-follow-container">
                <span className="impressum-text04">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="impressum-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="impressum-link2"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="impressum-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="impressum-link3"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="impressum-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="impressum-link4"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="impressum-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="about-section" className="impressum-about-us">
          <h1 className="impressum-text05">Impressum</h1>
          <div className="impressum-container1">
            <span className="impressum-text06">
              <span className="impressum-text07">
                E-Mail:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="impressum-text08">contact@retuned.ch</span>
              <br className="impressum-text09"></br>
              <br className="impressum-text10"></br>
              <span className="impressum-text11">Haftungsausschluss</span>
              <br></br>
              <span>
                Der Autor übernimmt keine Gewähr für die Richtigkeit,
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der
                Informationen.
              </span>
              <br></br>
              <span>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder
                immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch
                Missbrauch der Verbindung oder durch technische Störungen
                entstanden sind, werden ausgeschlossen.
              </span>
              <br></br>
              <br></br>
              <span>
                Alle Angebote sind freibleibend. Der Autor behält es sich
                ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
                gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen
                oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </span>
              <br></br>
              <br></br>
              <span className="impressum-text21">
                Haftungsausschluss für Inhalte und Links
              </span>
              <br></br>
              <span>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb
                unseres Verantwortungsbereichs. Es wird jegliche Verantwortung
                für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
                solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen
                Nutzers.
              </span>
              <br></br>
              <br></br>
              <span className="impressum-text26">Urheberrechtserklärung</span>
              <br></br>
              <span>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf dieser Website, gehören ausschliesslich
                retuned.ch oder den speziell genannten Rechteinhabern. Für die
                Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
                des Urheberrechtsträgers im Voraus einzuholen.
              </span>
            </span>
          </div>
        </div>
        <div className="impressum-footer">
          <div className="impressum-menu">
            <Link href="/">
              <a className="impressum-link5">
                <h1 className="impressum-logo2 link">retuned.ch</h1>
              </a>
            </Link>
            <div className="impressum-links-container1">
              <div className="impressum-container2">
                <Link href="/impressum">
                  <a className="impressum-link6 link">Impressum</a>
                </Link>
              </div>
            </div>
            <div className="impressum-follow-container1"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .impressum-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .impressum-top-container {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #402141;
          }
          .impressum-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-link {
            display: contents;
          }
          .impressum-logo {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .impressum-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-burger-menu {
            width: 24px;
            height: 24px;
          }
          .impressum-mobile-menu {
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
          .impressum-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .impressum-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .impressum-icon03 {
            width: 24px;
            height: 24px;
          }
          .impressum-right-side {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .impressum-links-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .impressum-text {
            margin-bottom: 8px;
          }
          .impressum-text01 {
            margin-bottom: 8px;
          }
          .impressum-text02 {
            margin-bottom: 8px;
          }
          .impressum-link1 {
            display: contents;
          }
          .impressum-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .impressum-text04 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .impressum-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-link2 {
            display: contents;
          }
          .impressum-icon05 {
            width: 24px;
            height: 24px;
          }
          .impressum-link3 {
            display: contents;
          }
          .impressum-icon07 {
            width: 24px;
            height: 24px;
          }
          .impressum-link4 {
            display: contents;
          }
          .impressum-icon09 {
            width: 24px;
            height: 24px;
          }
          .impressum-about-us {
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
          .impressum-text05 {
            color: var(--dl-color-gray-500);
          }
          .impressum-container1 {
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
          .impressum-text06 {
            color: var(--dl-color-gray-500);
          }
          .impressum-text07 {
            font-weight: 700;
          }
          .impressum-text08 {
            font-style: normal;
            font-weight: 400;
          }
          .impressum-text09 {
            font-weight: 700;
          }
          .impressum-text10 {
            font-weight: 700;
          }
          .impressum-text11 {
            font-weight: 700;
          }
          .impressum-text21 {
            font-weight: 700;
          }
          .impressum-text26 {
            font-weight: 700;
          }
          .impressum-footer {
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
          .impressum-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-link5 {
            display: contents;
          }
          .impressum-logo2 {
            text-decoration: none;
          }
          .impressum-links-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .impressum-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .impressum-link6 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .impressum-follow-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .impressum-burger-menu {
              display: flex;
            }
            .impressum-about-us {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .impressum-menu {
              flex-direction: column;
            }
            .impressum-links-container1 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .impressum-links-container1 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .impressum-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .impressum-link6 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .impressum-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Impressum
