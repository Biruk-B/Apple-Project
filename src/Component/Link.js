import React, { Component } from 'react';

class Link extends Component {
  render() {
    return <div>




                    <div class="model">
                            {this.props.model}
                        </div>
                    <div class="title">
                        {this.props.title}
                    </div>
                <div class="description">
                    {this.props.description}
                </div>
                <div class="price">
                    {this.props.price}
                </div>
                <div class="link-wrapper">
                    <ul>
                        <li><a href="#">{this.props.link1}</a></li>
                        <li><a href="#">{this.props.link2}</a></li>
                    </ul>
                </div>
    </div>;
  }
}

export default Link;