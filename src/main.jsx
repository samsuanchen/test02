var kse=require("ksana-search");
var maincomponent = React.createClass({
  getInitialState:function() {
  	return {result:[]};
  },
  componentDidMount:function() {
  	kse.search("sample","資生",{range:{start:0}},function(err,data){
  		this.setState({result:data.excerpt});
  	},this);
  },
  render: function() {
    return (<div>Hello {this.state.result}
      <svg><circle r='20' cx='100' cy='100'></circle></svg>
      </div>);
  }
});
module.exports=maincomponent;