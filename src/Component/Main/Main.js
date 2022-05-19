import React, { Component } from 'react';
import macbook from '../../images/home/macbook-pro.jpg'
import watch from '../../images/icons/watch-series5-logo.png'
import apple from '../../images/icons/apple-card-logo.png'
import tv from '../../images/icons/apple-tv-logo.png'
import servant from '../../images/icons/servant-logo.png'

import air from '../../images/home/air-pods.jpg'
import mac from '../../images/home/macbook-pro.jpg'
import ipad from '../../images/icons/new-ipad-logo.png'
import news from '../../images/home/new-ipad.jpg'
import Link from '../Link';
import Youtube from '../Youtube/youtube';
// import You from '../Youtube/You';
// import API from '../Youtube/API';
class Main extends Component {
    render() {
        return <div>


            <section class="main-hightlight-setion ">
                <div class="container">
                    <div class="row">
                        <div class=" col-12 ">
                            <Link model="16-inch model" title="MacBook Pro" description="The best for the brightest."
                                link1="Learn More" link2="Bay"
                            />
                            <div class="main-image">
                                <img src={macbook} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="second-hightlight-section ">
                <div class="container-fluid">
                    <div class="second">
                        <Link title="iPhone 11 Pro" description=" Pro cameras. Pro display. Pro performance." price="From $24.95/mo. or $599 with tradeâ€‘in."
                            link1="Learn More" link2="Bay"
                        />

                    </div>
                </div>
            </section>

            <section class="thired-hightlight-section"> 
                <div class="container-fluid">
                    <Link title="iPhone 11" description=" Just the right amount of everything." price="From $16.62/mo. or $399 with tradeâ€‘in."
                        link1="Learn More" link2="Bay"
                    />

                </div>
            </section>

            <section class="fourth-hightlight-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={watch} />
                            </div>
                            <div class="description-wrapper">
                                With the new Always-On Retina display.You’ve never seen a watch like this.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={apple} />
                            </div>
                            <div class="description-wrapper">
                                Get 3% Daily Cash on purchases from Apple using Apple Card.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="fifith-hightlifht-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={tv} />
                            </div>
                            <div class="logo">
                                <img src={servant} />
                            </div>
                        </div>
                        <div class="right-side-setion col-12 col-md-6">
                            <div class="title">
                                AirPods Pro
                            </div>
                            <div class="description">
                                Magic like you’ve never heard.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={air} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="sixth-hightlight-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="model">
                                16-inch model
                            </div>
                            <div class="title">
                                MacBook Pro
                            </div>
                            <div class="description-wrapper">
                                The best for the brightest.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={mac} />
                            </div>
                        </div>
                        <div class="right-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={ipad} />
                            </div>
                            <div class="description-wrapper">
                                Like a computer. Unlike any computer.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={news} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
            <section className="youtubeVideosWrapper top-100">
                <Youtube />
                {/* <API /> */}
            </section>
        </div>;
    }
}

export default Main