var React=require('react');
var Gc=require('./Gc');

var ChildMain=React.createClass({

  render:function(){

    var commentNodes = this.props.movieArr.map(function(arr) {
     return (
       <div>
       <Gc pic={arr.Poster}/>
       <Gc Title={arr.Title} />
       <Gc Year={arr.Year}/>
       <Gc Type={arr.Type}/>

       </div>
     );
   });
   return (
         <div className="commentList">
           {commentNodes}
         </div>
       );
  }
});

module.exports=ChildMain;
