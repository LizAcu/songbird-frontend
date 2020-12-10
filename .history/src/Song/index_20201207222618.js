import * as React from 'react';
import { Card } from 'semantic-ui-react'
export default function Song (props) {
    console.log("I'm in the function song", props)

    const music = props.music.map(music => {
        console.log(music)
        return(
            <Card.Content key={music.id} textAlign={"center"}>
                 <Card.Description>
                     <br/>
                     <h2>{music.title}</h2>
                 </Card.Description>
             </Card.Content>

        )
    })


    
       return (
    <Card.Group centered={true}>
        {music}
    </Card.Group>
)
       }