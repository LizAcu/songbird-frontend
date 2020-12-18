import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Label, Icon, Input } from 'semantic-ui-react'


export default class MusicInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
          title: '',
          artist: '',
          album: '',
          album_cover: '',
          likes: 0,
          song: ''  
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMusic({
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            album_cover: this.state.album_cover,
            song: this.state.song
        })
    }

    render() {
        return (
            <div>
            <Form className="new-form" onSubmit={this.handleSubmit}>
                <Label className="title"><Icon name="bars"></Icon>Title: 
                    <Input type="text"
                           name="title"
                           value={this.state.title}
                           placeholder="Enter a title"
                           onChange={this.handleChange}
                           /> 
                </Label>
                <Label><Icon name="id card"></Icon>Artist:
                    <Input type="text"
                           name="artist"
                           value={this.state.artist}
                           placeholder="Enter an artist"
                           onChange={this.handleChange}
                           /> 
                </Label>
                <Label>Album:
                    <Input type="text"
                           name="album"
                           value={this.state.album}
                           placeholder="Enter an album -optional-" 
                           onChange={this.handleChange}
                           />
                </Label>
                <Label><Icon name="image"></Icon>Album Art:
                    <Input type="text"
                           name="album_cover"
                           value={this.state.album_cover}
                           placeholder="Insert album art"
                           onChange={this.handleChange}
                           /> 
                            
                </Label>
                <Label><Icon name="file audio"></Icon>
                    Upload audio:
                    <Input type="text"
                           name="song"
                           value={this.state.song}
                           onChange={this.handleChange}
                            />
                </Label>
                <br />
                <Button animated="vertical" color="blue" type="Submit">
                    <Button.Content hidden><Icon name="plus circle" /></Button.Content>
                    <Button.Content visible>Upload
                    </Button.Content>
                    </Button>
            </Form>
            <br />
            </div>
          
          
          
        );
    }
    
}