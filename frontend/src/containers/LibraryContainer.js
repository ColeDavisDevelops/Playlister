import React from "react";
import LibraryPlaylistList from "../Components/LibraryPlaylistList";
import ApiKey from "../keys";

class LibraryContainer extends React.Component {
  state = {
    videos: null,
    searchTerm: "jazz",
    title: ''
 
  };

  changeTitle = () => {
    this.setState({
      title: "newTitle"
    })
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ApiKey.API_KEY1}&q=${this.state.searchTerm}&type=video`
    )
      //fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCpsM4JZEmu7P3DxN45cg8wh6QliY87FBk&q=%22pop%22&type=video`)
      .then((res) => res.json())
      .then((videos) =>
        this.setState({
          videos: videos.items,
        })
      );
  }

 


  render() {
    return (
      <div>
        <LibraryPlaylistList  changeTitle={this.changeTitle}  videos={this.state.videos} />
      </div>
    );
  }
}
export default LibraryContainer;