import React,{Component} from "react";
import Prueba from "./demo";

class Repetir extends Component {
    state={
        list:["success","warning","primary","secondary"]
    }
    render(){
      return (
      this.state.list.map(<Prueba.render/>)    
      );
    }
}
export default Repetir;