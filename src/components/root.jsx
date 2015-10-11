import React, { Component } from 'react'
import Icon from 'react-fa'
import Results from './results'
import FormSearch from './form-search'
import { Button } from 'react-bootstrap'
import Signup from './signup'
import yoloImage from '../../static/yolo.gif'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.toggleSignup = this.toggleSignup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      showSignup: false
    }
  }

  handleSubmit (options) {
    this.setState({
      options: options
    })
  }

  toggleSignup () {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  render () {
    let content = this.state.options
      ? (<Results options={this.state.options}/>) : void 0

    return (
      <div>
        <div className='header'>
          <div className='container'>
            <img src={yoloImage} width='500' height='199' />
            <span>
              .tips
            </span>
            <small>beta</small>

            <div className='side'>
              <a href='https://github.com/xicombd/yolo.tips' target='_blank'>
                <Icon name='github' />
              </a>
              <a href='https://twitter.com/getyolotips' target='_blank'>
                <Icon name='twitter' />
              </a>
            </div>
          </div>
        </div>
        <div className='container'>
          <FormSearch onSubmit={this.handleSubmit}/>
          {content}
          <Signup show={this.state.showSignup} onHide={this.toggleSignup} />
        </div>
        <Button bsSize='large' bsStyle='primary' onClick={this.toggleSignup} className='subscribe'>
          <Icon name='envelope' /> Subscribe
        </Button>
      </div>
    )
  }
}
