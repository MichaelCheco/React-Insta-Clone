import React from "react";
import SearchBar from "./SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../dummy-data";
class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            likes: 370,
            filteredPosts: [],
            filterTarget: ""
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({ posts: dummyData });
        }, 500);
      }
      increment = prevState => {
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
      };
    
      handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      filter = event => {
        this.handleInput(event); // SET STATE CALL HERE DETERMINES this.state.filterTarget go off and do this, and finish when you can
        this.setState(prevState => {
          const filteredPosts = prevState.posts.filter(post => {
            return post.username.includes(prevState.filterTarget);
          });
          return { filteredPosts: filteredPosts };
          // this could be just { filteredPosts }
        });
      };
    render() {
        return (
            <div className="App">
        <SearchBar
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
        />
        <PostContainer
          data={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
          likes={this.state.likes}
          increment={this.increment}
        />
      </div>
        )
    }
}

export default PostsPage;