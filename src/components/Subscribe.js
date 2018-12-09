import React, { PureComponent } from 'react'
import jsonp from 'jsonp'

import { Button, Form, Input, FormGroup, Col, Alert } from 'reactstrap'

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

export default class Subscribe extends PureComponent {
  constructor(props, ...args) {
    super(props, ...args)

    this.state = {
      status: null,
      msg: null
    }

    this.actionURL = `//${process.env.REACT_APP_LIST_URL}.list-manage.com/subscribe/post?u=${process.env.REACT_APP_LIST_U}&amp;id=${process.env.REACT_APP_LIST_ID}`
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const { target, option } = event
    const { value, name } = target

    ;(option) ? this.setState({
      [name]: option.value ? option.value : ''
    }) : this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
   
    if (!this.state.EMAIL || this.state.EMAIL.length < 5 || this.state.EMAIL.indexOf('@') === 1) {
      this.setState({
        status: 'error'
      })
    }

    const url = getAjaxUrl(this.actionURL) + `&EMAIL=${encodeURIComponent(this.state.EMAIL)}`

    this.setState({
      status: 'sending',
      msg: null
    }, () => jsonp(url, {
      param: 'c'
    }, (err, data) => {
      if (err) {
        this.setState({
          status: 'error',
          msg: err
        })
      } else if (data.result !== 'success') {
        this.setState({
          status: 'error',
          msg: data.msg
        })
      } else {
        this.setState({
          status: 'success',
          msg: data.msg
        })
      }
    }))
  }

  render() {
    const { action, messages } = this.props
    const { status, msg } = this.state
    const style = {
      textAlign: 'center',
      padding: '2em'
    }

    return (
      <div style={style}>
        <Form action={action} method="post" noValidate>
          <FormGroup row>
            <Col sm={3}>
            </Col>
            <Col sm={6}>
            <Input
              type="email"
              name="EMAIL"
              id="email"
              onChange={this.handleChange}
              placeholder={messages.inputPlaceholder}
              innerRef='focus'
              bsSize='lg'
              required={true} />
            </Col>
            <Col sm={3}>
            </Col>
            </FormGroup>
            <Button
              color="primary"
              disabled={this.state.status === 'sending' || this.state.status === 'success'}
              onClick={this.onSubmit}
              type='submit'>
            { messages.btnLabel }
            </Button>
            <div>
              { status === 'sending' && <Alert color="primary">{ messages.sending }</Alert> }
              { status === 'success' && <Alert color="success">{ messages.success || msg }</Alert> }
              { status === 'error' && <Alert color="danger">{ messages.error || msg }</Alert> }
            </div>
        </Form>
      </div>
    )
  }
}

Subscribe.defaultProps = {
  messages: {
    btnLabel: 'Subscribe',
    sending: 'Subscribing...',
    success: 'Thank you for subscribing!',
    error: 'Oops, we have an error...',
    inputPlaceholder: 'Greatness awaits, don\'t miss'
  }
}
