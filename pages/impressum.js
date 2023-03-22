import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'

const Impressum = (props) => {
  return (
    <>
      <div className="impressum-container">
        <Head>
          <title>Impressum - Retuned</title>
          <meta property="og:title" content="Impressum - Retuned" />
        </Head>
        <div className="top-fix-container">
        <nav data-role="Header" className="menu-navbar">
            <Link href="/">
              <a className="menu-link">
                <img src="images/Retuned-02.svg" className="menu-logo" />
              </a>
            </Link>
            <div className="menu-right-side">
              <div className="menu-links-container">
                <a href="/" className="menu-link link">
                  <SolidButton button="Home"></SolidButton>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="impressum-top-container">
        </div>
        <div className="impressum-text01">
          <h1 className="impressum-text05">Impressum</h1>
          <div className="impressum-container1">
            <span className="impressum-text06">
              <span className="impressum-text07">
                E-Mail: 

              </span>
              <span className="impressum-text08">
              <a href="mailto:contact@retuned.ch?subject=" className="link">contact@retuned.ch</a>
              </span>
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
        <div className="footer">
          <div className="footer-menu">
            <Link href="/">
              <a className="impressum-link5">
                <img src="images/Retuned-02.svg" className="footer-logo" />
              </a>
            </Link>
            <div className="footer-links-container">
              <div className="footer-container">
                <Link href="/impressum">
                  <a className="impressum-link6 link">
                    <SolidButton button="Impressum"></SolidButton>
                  </a>
                </Link>
              </div>
            </div>
            <div className="footer-follow-container"></div>
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
          .impressum-link {
            display: contents;
          }
          .impressum-text {
            margin-bottom: 8px;
          }
          .impressum-text02 {
            margin-bottom: 8px;
          }
          .impressum-link1 {
            display: contents;
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
          .impressum-text01 {
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
            font-family: Poppins-Medium;
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
            padding-right: 10px;
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
          .impressum-link5 {
            display: contents;
          }
          .impressum-link6 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .impressum-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .impressum-link6 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Impressum
