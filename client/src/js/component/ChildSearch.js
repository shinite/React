var React= require('react');

var ChildSearch=React.createClass({

  getInitialState: function(){
    return({data: ""})
  },

  handleChange: function(event){
    return(
      this.setState({data:event.target.value})
    )
  },

  sendToParent: function(){    
      this.props.click(this.state.data)
  },

  render: function(){
    return (
      <div className="jumbotron">
      <h2 id='heading'>Welcome to the world of Movies..</h2>
       <div className="inner-addon left-addon">
       <i className="glyphicon glyphicon-search">
       </i>
       <input type="text" className="form-control" placeholder='Search Movies here....' id='searchBox' value={this.state.data}  onChange={this.handleChange}/>
       <a className="btn btn-primary btn-medium" href="#" id='searchButton' onClick={this.sendToParent}>
        <b> Search..   </b>
       </a>
      </div>
      </div>
    )
  }
})

module.exports=ChildSearch;
