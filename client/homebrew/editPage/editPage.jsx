var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Statusbar = require('../statusbar/statusbar.jsx');
var PageContainer = require('../pageContainer/pageContainer.jsx');
var Editor = require('../editor/editor.jsx');

var FullClassGen = require('../editor/snippets/fullclass.gen.js');

var request = require("superagent");

var SAVE_TIMEOUT = 3000;

var EditPage = React.createClass({
	getDefaultProps: function() {
		return {
			id : null,
			entry : {
				text : "",
				shareId : null,
				editId : null,
				createdAt : null,
				updatedAt : null,
			}
		};
	},

	getInitialState: function() {
		return {
			text: this.props.entry.text,
			pending : false,
			lastUpdated : this.props.entry.updatedAt
		};
	},

	componentDidMount: function() {
		var self = this;
		window.onbeforeunload = function(){
			if(!self.state.pending) return;
			return "You have unsaved changes!";
		}
	},

	handleTextChange : function(text){
		this.setState({
			text : text,
			pending : true
		});
		this.save();
	},

	save : _.debounce(function(){
		request
			.put('/homebrew/update/' + this.props.id)
			.send({text : this.state.text})
			.end((err, res) => {
				this.setState({
					pending : false,
					lastUpdated : res.body.updatedAt
				})
			})
	}, SAVE_TIMEOUT),

	render : function(){
		return <div className='editPage'>
			<Statusbar
				editId={this.props.entry.editId}
				shareId={this.props.entry.shareId}
				printId={this.props.entry.shareId}
				lastUpdated={this.state.lastUpdated}
				isPending={this.state.pending} />

			<div className='paneSplit'>
				<div className='leftPane'>
					<Editor text={this.state.text} onChange={this.handleTextChange} />
				</div>
				<div className='rightPane'>
					<PageContainer text={this.state.text} />
				</div>
			</div>
		</div>
	}
});

module.exports = EditPage;
