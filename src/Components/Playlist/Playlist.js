import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
class Playist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playist;
