import React,{Component} from 'react';
import {robots} from '../component/robots';
import SearchBox from '../component/SearchBox';
import CardList from '../component/CardList';
import '../container/App.css';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry'
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      SearchField:''
  }
}
onSearchChange=(event)=> {
    this.setState({SearchField:event.target.value})
  }
  componentDidMount(){
    this.setState({robots:robots})
  }
  render(){
    const filteredRobots=this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
    })

    return(
      <div className='tc '>
        <h2 className='f1'>ROBO_FRIENDS</h2>
        <SearchBox SearchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
      );
    }
}


export default App;
