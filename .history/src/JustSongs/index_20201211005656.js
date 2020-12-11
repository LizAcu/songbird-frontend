import * as React from 'react';
import { Card, Button } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player';

// import true.mp3 from '../public/mp3Folder/true.mp3';
// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'

export default function Songs (props) {
    console.log("I'm in the function song", props) //logs out as empty array on reload wtf 

    const music = props.music.map(music => {
        console.log(music.song)
        // console.log(music._id)
        return(
            <Card.Content key={music._id} textAlign={"center"} className="cards">
                <Card.Header>
                    <img src={music.album_cover} width="250" height="200" className="album-cover-image"></img>
                </Card.Header>    
                <Card.Description>
                    <br/>
                    <h2>{music.title}</h2>
                    <h3>{music.artist}</h3>
                </Card.Description>
                <Card.Header>
                    <audio crossOrigin="anonymous"
                        src={music.song}
                        controls
                        />
                </Card.Header>
             </Card.Content>   
            
            

        )
    })


    
       return (
    <Card.Group centered={true}>
        {music}
    </Card.Group>
)
       }