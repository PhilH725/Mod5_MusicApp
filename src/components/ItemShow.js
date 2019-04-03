
import React, {Component} from 'react'
import {fetchingItem} from '../redux/actionCreators'
import {connect} from 'react-redux'

class ItemShow extends Component {

  componentDidMount() {
    this.props.fetchingItem("songs", this.props.id)
  }

  render() {
    return (
      this.props.activeItem ?
      <h1>{this.props.activeItem.name}</h1>
      :
      <div>
        <h3>Genre/Artist/Album/Song title</h3>
        <div>information on the selected thing</div>
        <div>{this.props.id}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchingItem: () => dispatch(fetchingItem("songs", ownProps.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow)
