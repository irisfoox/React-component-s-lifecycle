import React from 'react';
import ReactDOM from 'react-dom';
class Sentence extends React.Component{
    constructor(props){
        super(props);
        this.state={favoriteAnimal:"dog"};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({favoriteAnimal:"cat"})
        },3000)
        //after 3 sec from loading changes into cat    
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML=
        "before the update my favorite animal was: "+prevState.favoriteAnimal;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML=
        "after the update my favorite is: "+this.state.favoriteAnimal;
    }
    render(){
        return(
            <>
             <h2>My favorite animal is {this.state.favoriteAnimal}</h2>
             <div id="div1"></div>
             <div id="div2"></div>  
            </>
        );
    }
}
ReactDOM.render(<Sentence/>,document.getElementById('root'));