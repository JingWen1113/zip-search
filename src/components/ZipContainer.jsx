import React, { Component } from 'react';


class zipContainer extends Component {

    render(){
        return(
            <div>
                <form OnSubmit={this.OnSubmit}>
                    <input type="text" onChange={this.onChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}

export default zipContainer;