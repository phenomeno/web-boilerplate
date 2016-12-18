import React from 'react'
import { observer, inject } from 'mobx-react'
import Hello from '../components/Hello.jsx'

@inject('greetings') @observer
export default class Home extends React.Component {
  // static onEnter({ todos, common, params }) {
  // }

  render() {
    const { greeting } = this.props
    return (
      <div>
        <p>Home</p>
        <Hello greeting={greeting.greeting}
      </div>
    )
  }
}
