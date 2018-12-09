
import React, { PureComponent } from 'react'

import { API_URL } from 'env'

export default class Invited extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sendername: '',
      sendermsg: ''
    }
  }

  render() {
    return (
      //@TODO
      <div class="container">
        <div class="jumbotron text-center">
            <h1>Your Have Been Invited!!</h1>
            <p>
                <%=result.sendername%> has invited you to join this wonderful app
            </p>
           <p>{this.state.sendername} says: {this.state.sendermsg}</p>
        </div>
      </div>
    )
  }
}
