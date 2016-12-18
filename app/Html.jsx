import React from 'react'
import App from './App.jsx'

export default class Html extends React.Component {
  render() {
    const { stores, children } = this.props
    const devServerURL = 'http://localhost:4004'

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <link href={devServerURL + '/dist/bundle.css'} rel="stylesheet"/>
          <script dangerouslySetInnerHTML={insertState(stores)}/>
        </head>
        <body>
          <div id="root">
            <App stores={stores}>
              {children}
            </App>
          </div>
        </body>
      </html>
    )
  }
}

function insertState(stores) {
  return {
    __html: 'window.__STATE = ' + JSON.stringify(stores, null, process.env.DEV ? 4 : 0) + ';'
  }
}
