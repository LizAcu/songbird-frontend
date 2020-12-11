import React, { Component } from 'react'
import { Form, Button, Label, Header } from 'semantic-ui-react'

export default class EditMusic extends Component {
    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            title: props.musicToEdit.title,
            artist: props.musicToEdit.artist,
            album: props.musicToEdit.album, 
            album_cover: props.musicToEdit.album_cover
            
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateMusic(this.state)
    }

    render() {
        return(
            <React.Fragment>
            <Header as='h3'>Edit song</Header>
            <Form onSubmit={this.handleSubmit}>
                <Label>Title:</Label>
                <Form.Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Enter new title"
                  onChange={this.handleChange}
                  />
                  <Label>Artist:</Label>
                  <Form.Input
                    type="text"
                    name="artist"
                    value={this.state.artist}
                    placeholder="Enter new artist info"
                    onChange={this.handleChange}
                    />
                    <Label>Album:</Label>
                    <Form.Input
                      type="text"
                      name="album"
                      value={this.state.album}
                      placeholder="Enter new album info"
                      onChange={this.handleChange}
                      />
                    <Label>Album Art:</Label>
                    <Form.Input
                    type="text"
                    name="album_cover"
                    value={this.state.album_cover}
                    placeholder="Enter new album info"
                    onChange={this.handleChange}
                    />
                      <Button type="Submit">Update Song</Button>  
            </Form>
            </React.Fragment>
        )
    }
}