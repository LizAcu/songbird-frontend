import MusicInput from './MusicInput'

import React, { Component} from "react"
import MusicInput from "../MusicInput"
import EditMusic from "../EditMusic"
import PostList from "../PostList"
import Song from "../Song"
import MusicContainer from "../MusicContainer"
import ProfileStats from "../ProfileStats"

export default class ProfilePage extends Component {
    constructor(props){
    super(props)

    this.state={

        music:[],
        idOfMusicToEdit: -1,
        profilePage: true,
      }
    }

    getUserPosts = async () => {
        try {
          const url = process.env.REACT_APP_API_URL + "/music"
          console.log(url)
          const musicResponse = await fetch(url, {
            credentials: 'include'
          })
          console.log(musicResponse)
          const musicJson = await musicResponse.json()

          this.setState({
            music: musicJson.data
          })
        } catch(err) {
          console.log("Error getting Music data.", err)
        }
      }

    deleteMusic = async (musicID) => {

        try {
          const url = process.env.REACT_APP_API_URL + "/music/" + musicID;

          const deleteMusicResponse = await fetch(url, {
            credentials: 'include',
            method: 'DELETE'
          })
          const deleteMusicJson = await deleteMusicResponse.json()
          console.log("deleteMusicJson:", deleteMusicJson)

          if(deleteMusicResponse.status === 200) {
            this.setState({
              music: this.state.music.filter(music => music._id !== musicID)
            })
          }
        } catch(err) {
          console.log("Error deleting Music: ", err)
        }
      }

    createMusic = async (addNewMusic) => {
        try {
          const url = process.env.REACT_APP_API_URL + "/music"
          const newMusicResponse = await fetch(url, {
            credentials: 'include',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewMusic)
          })
          const newMusicJson = await newMusicResponse.json()
        //   console.log(newPostJson )
          if(newMusicResponse.status === 200 || newMusicResponse.status === 201){
            this.setState({
              music: [...this.state.music, newMusicJson]
            })
          }
        } catch(err) {
          console.log("Error adding a New Music", err)
        }
      }

      editMusic = (idOfMusicToEdit) => {
        console.log("you are trying to edit music with id: ", idOfMusicToEdit)

        // put the id of the Post that we want to edit in state
        // to conditionally render a modal
        this.setState({
          idOfMusicToEdit: idOfMusicToEdit
        })
      }


    updateMusic = async (updateMusicInfo) => {
        try {
          const url = process.env.REACT_APP_API_URL + "/music/" + this.state.idOfMusicToEdit

          const updateMusicRes = await fetch(url, {
            credentials: 'include',
            method: 'PUT',
            body: JSON.stringify(updateMusicInfo),
            headers: {
              'Content-Type': 'application/json'
            }
          })

        //   console.log("updatePostRes", updatePostRes)
          const updateMusicJson = await updateMusicRes.json()
          console.log("updateMusicJson:", updateMusicJson)

          if(updateMusicRes.status === 200) {
            const music = this.state.music
            const indexUpdated = music.findIndex(music => music._id === this.state.idOfMusicToEdit)
            posts[indexUpdated] = updateMusicJson
            this.setState({
              music: music,
              idOfMusicToEdit: -1 // close the modal
            })
          }
        } catch(err) {
          console.log("Error updating Music info: ", err)
        }
      }

    closeModal = () => {
        this.setState({
        idOfMusicToEdit: -1
    })
    }

    handleOpenProfilePage = () => {
      this.setState({ profilePage: true })
      console.log(this.state.profilePage)
    }

    handleCloseProfilePage = () => {
      this.setState({ profilePage: false })
      console.log(this.state.profilePage)
    }

    componentDidMount() {
        this.getUserPosts()
    }
    render() {

        return(
            <React.Fragment>
            {
              this.state.profilePage === true
              &&
              <div>
            <span className="fake-link" onClick={this.handleCloseProfilePage}><img src="https://i.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png" width="50" height="50" alt="home page"></img></span>
            <h2>My Profile Page</h2>
            <Song
              music={this.state.music}
              deleteMusic={this.deleteMusic}
              editMusic={this.editMusic}
            />
            <MusicInput createMusic={this.createMusic}/>
            {
              this.state.idOfMusicToEdit !== -1
              &&
              <EditMusic
                musicToEdit={this.state.music.find((music) => music._id === this.state.idOfMusicToEdit)}
                updateMusic={this.updateMusic}
                closeModal={this.closeModal}
              />
            }
          </div>
          }
          {
            this.state.profilePage === false
            &&
            <div>
            <span className="fake-link" onClick={this.handleOpenProfilePage}><img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" width="55" height="55" alt="profile page"></img></span>
            <MusicContainer/>
            </div>
          }
          </React.Fragment>

        )}

}
