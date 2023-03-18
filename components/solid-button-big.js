import React from 'react'

import PropTypes from 'prop-types'

const SolidButtonBig = (props) => {
  return (
    <>
      <div className={`solid-button-big-container ${props.rootClassName} `}>
        <button className="solid-button-big-button button Button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .solid-button-big-container {
            height: 74px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .solid-button-big-button {
            color: var(--dl-color-gray-white);
            width: auto;
            border: none;
            height: var(--dl-size-size-tripleunit);
            padding: var(--dl-space-space-unit);
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-radius: 50px;
            background-color: #402141;
          }
          .solid-button-big-button:hover {
            background-color: #e83e59;
          }
        `}
      </style>
    </>
  )
}

SolidButtonBig.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SolidButtonBig.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButtonBig
