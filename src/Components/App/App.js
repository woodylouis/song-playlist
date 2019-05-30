import React from "react";
// import logo from './logo.svg';
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist/";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [
      this.props.name,
      this.props.artist,
      this.props.album,
      this.props.id
    ];

    this.state.playlistName = "New Playlist";
    this.state.playListTracks = [
      this.props.name,
      this.props.artist,
      this.props.album,
      this.props.id
    ];
  }

  addTrack(track) {
    if (
      this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    }
    track.push(track);
    this.setState({ playListTracks: track });
  }

  render() {
    return (
      <div>
        <h1>
          L<span className="highlight">oui</span>s
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component here--> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playListTracks={this.state.playListTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
