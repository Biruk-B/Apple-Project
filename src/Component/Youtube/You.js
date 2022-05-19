







import React, { Component } from 'react'
import '../../Css/bootstrap.css'
import './youtube.css'

class You extends Component {
    constructor() {
        super();
        this.state = {
            youtubevideos: []
        }
    }
    componentDidMount() {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlhpQsh0Yq-eiQsxBnKtGrHwDGOorDwPE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
            .then((Response) => Response.json())
            .then((data) => {
                const videos = data.items
                this.setState((state) => {
                    return {
                        youtubevideos: videos
                    }
                })
            })
    }

    render() {
        console.log(this.state.youtubevideos)
        return (

            <div>
                <div className="allVideosWrapper">
                    <div className="container">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-12">
                                <div className="title-wraper bold video-title-wrapper">
                                    Latest Videos
                                </div>
                            </div>


                            {this.state.youtubevideos.map((singlevideo) => {

                                let vidId = "QuMWSrJyt3o"
                                let vidlink = `https://www.youtube.com/watch?v=${vidId}`
                                let videos = (
                                    <div className='container col-12 col-md-6'>
                                        <div className='singleVideoWrapper'>
                                            <div className='videoThumbnail'>
                                                <a href={vidlink} target='_blank'>
                                                    <img src={singlevideo.snippet.thumbnails.high.url}>
                                                    </img></a>
                                            </div>
                                            <div className='videoInfoWrapper'>
                                                <div className='videoTitle'>
                                                    <a href={vidlink} target='_blank'>
                                                        {singlevideo.snippet.title}
                                                    </a>
                                                </div>
                                                <div className='videoDesc'>
                                                    {singlevideo.snippet.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                                return videos
                            })}


                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default You