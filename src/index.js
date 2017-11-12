import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//go back and grab your api key
const API_KEY = 'AIzaSyBQjyYuGVs3eN03mWjDbNbtttoE1mT7dPs';

//install lodash!!! npm install --save lodash

//class component to keep track of the list of videos
//by recording them on its list of state
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //same as this.setState({ videos: videos }); with the same name is used for key and value
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        //prevents search from updating every instance and instead delays the search for a smoother experience
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

//Take this component's generated HTML and put it on the page (in the DOM)
//Using just 'App' creates a class, but we want an instance so we use '<App />'
ReactDOM.render(<App />, document.querySelector('.container'));