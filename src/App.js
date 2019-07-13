import React, { Component } from "react";
import unsplash from "./unsplash";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // set imgs to empty array
            imgs: []
        };
    }
    componentDidMount() {
        fetch(
            "https://api.unsplash.com/photos/?client_id=" +
                unsplash.applicationId
        )
            // turn response to json
            .then(res => res.json())
            .then(data => {
                // set data to imgs array
                this.setState({ imgs: data });
                console.log(data);
            })
            .catch(err => {
                console.log("error happened during fetching");
            });
    }

    render() {
        // access imgs from state
        const result = this.state.imgs;
        // loop over all imgs and display them
        let imgs = result.map(img => (
            <img src={img.urls.small} key={img.id} alt={img.alt_description} />
        ));
        return (
            <div>
                <ul>{imgs}</ul>
                {/* <ImgList data={this.state.imgs} alt="" /> */}
            </div>
        );
    }
}
