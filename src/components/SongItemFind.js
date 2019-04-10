
import React from 'react'
import {List, Image} from 'semantic-ui-react'
import {addingFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'
// <Image src={require('../img/image.png')} size="mini" floated="left"/>
// props.addFavoriteSong(props.song, props.user.id)
const SongItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <button onClick={()=>props.addingFavoriteSong(props.song.name, props.song.artistName)}>Add to Favorites</button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
      <Image src={props.song.images[3]} size="mini" floated="left"/>
      <span>{props.song.name} - {props.song.artistName}</span>
      </List.Content>
    </List.Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteSong: (song, id) => dispatch(addingFavoriteSong(song, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongItemFind)
