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
          <title>Retuned</title>
          <meta property="og:title" content="Retuned" />
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
                  <a href="#top" className="menu-link">
                    <SolidButton button="About us"></SolidButton>
                </a>
                </div>
                <a href="#contact" className="menu-link">
                  <SolidButton button="Contact"></SolidButton>
                </a>
              </div>
            </nav>
        </div>
        <div className="home-top-container">
        </div>
        <a className="anchor" id="top"></a>
        <div id="about-section" className="home-about-us">
          <h1 className="home-text3">About us</h1>
          <span className="home-text4">
          </span>
          <div className="home-container1">
            <span className="home-text5">
            Wir sind die Band «Retuned» und sind eine siebenköpfige Funk-, Blues- und Pop-Band aus der Region Burgdorf BE. Unsere Gruppe besteht schon seit vielen Jahren und wurde einst von der Musikschule Burgdorf gegründet, über welche wir viele Konzerte spielen durften.
            Über die Jahre gab es verschiedene Wechsel in Musikstil und Bandmitglieder, bis wir zur heutigen Band wurden. Seit 2017 bestehen wir aus den folgenden sieben Mitglieder:
            <ul>
              <li>Silia, vocals</li>
              <li>Ramon, vocals</li>
              <li>Sina, saxophone</li>
              <li>Alex, guitar</li>
              <li>Vivienne, keys</li>
              <li>Jan, bass</li>
              <li>Dominic, drums</li>
            </ul>
            Mit der Band «Retuned» haben wir uns einen Namen gemacht, indem wir bekannte Pop- und Funk-Songs in unserem eigenen Stil arrangieren und covern. Auch einige Blues- und Jazz-Stücke finden sich in unserem Repertoire. Dabei sollen sowohl der Gesang als auch die verschiedenen Instrumente im Fokus stehen, wodurch sich in der Mehrheit unserer Interpretationen Instrumentalteile mit abwechslungsreichen Solos befinden. 
            Aufgetreten sind wir an verschiedenen Hochzeiten, sowohl bei Trauungen als auch beim späteren Fest, an Gewerbeausstellungen und Sportlerehrungen, wie auch an vielen kleineren Anlässen in Stadthauskellern oder anderen kleinen Lokalen.
            Buchen darf man uns gerne für ganztägige Anlässe wie auch für Konzerte im kleineren oder grösseren Rahmen.
            Wir freuen uns sehr über deine Anfrage.
            </span>
          </div>
        </div>
        <div id="contact" className="home-contact">
          <span className="home-text6">
            Wir freuen uns auf weitere Konzerte und Auftritte
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
        <div className="footer">
          <div className="footer-menu">
            <Link href="/">
              <a className="home-link4">
                <img src="images/Retuned-02.svg" className="footer-logo" />
              </a>
            </Link>
            <div className="footer-links-container">
              <div className="footer-container">
                <Link href="/impressum">
                  <a className="home-link5 link">
                    <SolidButton button="Impressum"></SolidButton>
                  </a>
                </Link>
              </div>
            </div>
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
            background-image: url('images/background.jpeg');
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
            font-family: Poppins-Medium;
            color: var(--dl-color-gray-500);
          }
          #top {
            display: block;
            position: relative;
            top: -110px;
            visibility: hidden;
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
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
          }
          .home-text7 {
            font-family: Poppins-Medium;
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
          .home-link4 {
            display: contents;
          }
          .home-logo2 {
            text-decoration: none;
          }
          .home-link5 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          ul {
            margin-bottom: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .home-about-us {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-contact {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .home-contact {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-link5 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
