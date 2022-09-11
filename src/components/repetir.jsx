import React,{Component} from "react";


class Repetir extends Component {
    state={
        list:["success","warning","primary","secondary"]
    }
    render(){
      return (
      this.state.list.map()    
      );
    }
}
export default Repetir;