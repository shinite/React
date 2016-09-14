var React=require('react')

var Gc=React.createClass({

  render: function(){
    return (
      <div>
      <div className="row">
        <div className="col-lg-6" id="left">
          <img src={this.props.pic}/>
        </div>
        <div className="col-lg-6" id="right">
          <h3>{this.props.Title}</h3>
          <h3>{this.props.Year}</h3>
          <h3>{this.props.Type}</h3>

        </div>
      </div>
      </div>
    )
  }
});
module.exports=Gc;
