import React, { PureComponent } from 'react'
import io from 'socket.io-client'
import OAuth from 'utils/OAuth'

import { API_URL } from 'env'
const socket = io(API_URL)
const providers = ['twitter', 'google', 'facebook', 'github', 'linkedin']

export default class Signup extends PureComponent {
  render() {
    return (
      <div className={'wrapper'}>
        <div className={'container'}>
          {providers.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              socket={socket}
            />
          )}
        </div>
      </div>
    )
  }
}
