var React = require('react');


var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var data={}
    var location=this.refs.location.value;

  if(location.length>0){
    this.refs.location.value='';
    this.props.onNewlocation(location);
  }
},
render: function(){
  return (
    <form onSubmit={this.onFormSubmit}>
      <div><input type="text" ref="location" placeholder="Enter location name"/></div>
      <div><button className="button expanded hollow">Get Weather</button></div>
    </form>
  );
}

})

module.exports= WeatherForm;
