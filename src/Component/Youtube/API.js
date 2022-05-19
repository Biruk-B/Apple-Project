








import React, { Component } from 'react'
import '../../Css/bootstrap.css'

 class API extends Component {
     constructor(){
         super();
         this.state={
             Youtubevideos:[]
         }
     }
     componentDidMount(){
         fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlhpQsh0Yq-eiQsxBnKtGrHwDGOorDwPE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
         .then((Response)=>Response.json())
         .then((data)=>{
             const Youtubevideos=data.items
             this.setState({Youtubevideos})
         })
     }
  render() {
      console.log(this.state.Youtubevideos)
    return (

            <div>
                <div className='container'>
                    <div>
                        <h3>Videos</h3>
                    </div>
                    {this.state.Youtubevideos.map((singlevideos)=>{
                        let vidId="QuMWSrJyt3o"
                        let vidlink=`https://www.youtube.com/watch?v=${vidId}`
                        let videos=(
                            <div className='row'>
                                <div className='image'>
                                    <a href={vidlink} target='_blank'>
                                        <img src={singlevideos.snippet.thumbnails.high.url}></img>
                                    </a>
                                </div>
                                <div className='tit'>
                                    <a href={vidlink} target='_blank'>
                                        {singlevideos.snippet.title}
                                    </a>
                                </div>
                                <div>
                                    {singlevideos.snippet.description}
                                </div>
                                
                            </div>
                            
                        )
                        return videos
                    })}
                </div>

            </div>
    )
  }
}
export default API