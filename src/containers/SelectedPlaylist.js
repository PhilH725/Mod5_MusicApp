
import React, {Component} from 'react'
import PlaylistSongItem from '../components/PlaylistSongItem'
import {Header, Grid, List} from 'semantic-ui-react'
// import Sortable from 'react-sortablejs'
import { connect } from 'react-redux'

class SelectedPlaylist extends Component {

  render() {
    return (
      this.props.selectedPlaylist ?
      <Grid.Column floated="right" width={12}>
        <Header as="h3">
          {this.props.selectedPlaylist.name}
        </Header>
        <List animated celled verticalAlign='middle'>
          {this.props.selectedPlaylist.songs.map(s => <PlaylistSongItem key={s.id} song={s} />)}
        </List>
      </Grid.Column>
      :
      <Grid.Column floated="right" width={12}>
        <h3>Choose or Create a playlist</h3>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist
})

export default connect(mapStateToProps)(SelectedPlaylist)
