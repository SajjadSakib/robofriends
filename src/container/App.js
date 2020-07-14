import React,{Component} from 'react';
import {connect} from 'react-redux';
import {robots} from '../component/robots';
import SearchBox from '../component/SearchBox';
import CardList from '../component/CardList';
import '../container/App.css';
import Scroll from '../component/Scroll';
import {setSearchField} from '../Action';
import ErrorBoundry from '../component/ErrorBoundry'

const mapStateToProps=(state)=>{
  return {
    searchField: state.searchField
      }
}

const mapDispatchToProps=(dispatch)=>({
 

    onSearchChange: (event)=> dispatch(setSearchField(event.target.value))

})

  

class App extends Component {

    constructor(){
    super()
    this.state = {
      robots: []
  }
}

  componentDidMount(){
    this.setState({robots:robots})
  }
  render(){
    const {robots}=this.state;
    const {searchField,onSearchChange}=this.props;
    const filteredRobots=robots.filter(robots=>{
    return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
      <div className='tc '>
        <h2 className='f1'>ROBO_FRIENDS</h2>
        <SearchBox SearchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
      );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
