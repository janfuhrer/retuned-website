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
