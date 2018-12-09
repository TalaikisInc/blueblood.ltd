import React, { PureComponent } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import github from '@fortawesome/fontawesome-free-brands/faGithub'
import facebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import twitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import google from '@fortawesome/fontawesome-free-brands/faGoogle'

import { API_URL } from 'env'

export default class OAuth extends PureComponent {
  state = {
    user: {},
    disabled: ''
  }

  componentDidMount = () => {
    const { socket, provider } = this.props

    socket.on(provider, user => {  
      this.popup.close()
      this.setState({user})
    })
  }

  checkPopup = () => {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: ''})
      }
    }, 1000)
  }

  openPopup = () => {
    const { provider, socket } = this.props
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)
    const url = `${API_URL}/${provider}?socketId=${socket.id}`

    return window.open(url, '',       
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  startAuth = (e) => {
    if (!this.state.disabled) {
      e.preventDefault()
      this.popup = this.openPopup()  
      this.checkPopup()
      this.setState({ disabled: 'disabled' })
    }
  }

  closeCard = () => {
    this.setState({ user: {} })
  }

  render() {
    const { name, photo } = this.state.user
    const { provider } = this.props
    const { disabled } = this.state
    
    return (
      <div>
        { name
          ? <div className={'card'}>              
              <img src={photo} alt={name} />
                <button onClick={this.closeCard.bind(this)} className={`${provider} ${disabled} button`}>
                    <FontAwesomeIcon icon={provider} />
                </button>
              <h4>{name}</h4>
            </div>
          : <div className={'button-wrapper fadein-fast'}>
              <button onClick={this.startAuth.bind(this)} className={`${provider} ${disabled} button`}>
                <FontAwesomeIcon icon={provider} />
              </button>
            </div>
        }
      </div>
    )
  }
}
