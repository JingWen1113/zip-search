import React, { Component } from 'react';
import ZipDisplay from "./ZipDisplay"

class zipContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            Allplaces:[],//will hold the addresses returned
            Zip: "",//holds the zip that the user enters
            Exist: false//sees if state exists
        }
    }

    onChange= (event) =>{//sets the Zip state to that of the one user entered
        this.setState({Zip : event.target.value})
    }

    fetchLocations= async() =>{ //calls api after the zip state is updated this way it can get information for specific zip address
        try{
            let zipGiven = this.state.Zip;
            console.log('this is the zip: '+zipGiven);
            let response = await fetch('http://ctp-zip-api.herokuapp.com/zip/'+zipGiven, { method: 'GET'} )
            console.log(response);
            const status = response.status
            let result = await response.json();
            console.log(result);
            if (status === 400 || status === 500) {
                console.log(result.error)
              } else {
                this.setState({Allplaces:result, Exist:true})//updates array and makes it so if the address is real Exist is true. 
                console.log('array of state is updated')
            }

        }catch (error){
            console.log(error);
        }
    }

    onSubmit= async(event)=>{
        event.preventDefault()
        if(this.state.Zip === "" || !this.state.Zip){
            return(alert('Need a zip code'));
        }
        if(isNaN(this.state.Zip)){
            return(alert("This is not a zip code!"))
        }
        this.fetchLocations()
        console.log("fetching info on Zip");
    }

    render(){
        const{Zip}=this.state.Zip
        console.log(this.state.Zip);
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={Zip}></input>
                    <input type="submit"></input>
                </form>
                <ZipDisplay cities = {this.state.Allplaces}/>
            </div>
        )
    }

}

export default zipContainer;