import React,{Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from '../component/SearchBox';
import CardList from '../component/CardList';
import '../container/App.css';
import Scroll from '../component/Scroll';
import {setSearchField,requestRobots} from '../Action';
import ErrorBoundry from '../component/ErrorBoundry'

const mapStateToProps=(state)=>{
  return {
    searchField: state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
      }
}


const mapDispatchToProps=(dispatch)=>({
 
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=> dispatch(requestRobots())
})

  

class App extends Component {
componentDidMount(){
  this.props.onRequestRobots();
  }
  render(){
    const {searchField,onSearchChange,robots,isPending}=this.props;
    const filteredRobots=robots.filter(robots=>{
    return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
      <h3> Loading</h3>:
      (
      <div className='tc '>
        <h2 className='f1'>ROBO_FRIENDS</h2>
        <SearchBox SearchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry> 
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
      )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
