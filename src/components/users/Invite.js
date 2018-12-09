
import React, { PureComponent } from 'react'

import { API_URL } from 'env'

export default class Invite extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      invitations: [],
      sender: '',
      link: '',
      to: '',
      msg: '',
      name: ''
    }
  }

  invite = () => {
    fetch(`${API_URL}/invite`, {
      method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: this.state.sender,
          link: this.state.link,
          to: this.state.inviteTo,
          msg: this.state.message,
          name: this.state.name
        })
      }).then(res => console.log(res))
  }

  invitations = (link) => {
    fetch(`${API_URL}/invitations?link=${link}`).then(res => res.json()).then(invites => {
      invites.forEach(invite => {
        const _to = invite.receiverid
        const _sent = invite.created_at
        const _seen = invite.updated_at
        let isSeen='not_seen'
        if (new Date(_seen) - new Date(_sent) > 0){ isSeen='Seen' }
        let sent = new Date(_sent).toLocaleDateString()
        this.state.invitations.push({
          to: _to,
          sent: sent,
          isSeen: isSeen
        })
      })
    })
  }

  render() {
    const invites = this.state.invitations.map(i => (
      <tr>
        <td>{i.to}</td>
        <td>{i.sent}</td>
        <td>{i.isSeen}</td>
      </tr>
    ))

    return (
        //@TODO
      <div class="container">
        <div class="jumbotron text-center">
            <h3> Welcome, <span id="name">{this.state.name}</span></h3>
            <p id="currentUser">{this.state.email}</p>
            <p>Your Invitation Code is: <span id="link">{this.state.link}</span></p>
            <hr />
            <input type="email" placeholder="email" id="invite_mail" />
            <label for="message"></label>
            <input id="message" placeholder="Your message" />
            <button onclick={this.invite()}> Invite</button>
            <br />
            <button onclick="myInvitations()" style="margin-top:20px;"> My Invites</button>
            <br />
            <table>
              { invites }
            </table>
        </div>
      </div> 
    )
  }
}
