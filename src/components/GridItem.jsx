var GridItem = React.createClass({
    getDefaultProps: function () {
        return{
            idx: 1,
        }
    },
    onClick: function(e) {
        this.props.drawGrid(parseInt(this.props.idx));
    },
    render: function(){
        return (
            <div className='gridItem' onClick={this.onClick}>{this.props.mapPlayer(this.props.children)}</div>
        )
    }
});

module.exports = GridItem;