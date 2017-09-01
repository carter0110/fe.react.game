var GridStatus = React.createClass({
    onClick: function(){
        this.props.reset();
    },
    render: function(){
        return (
            <div>
                <div>Now player:{this.props.mapPlayer(this.props.nowPlayer)}</div>
                <div> {parseInt(this.props.winner) !== 0 ?  'Winner:' + this.props.mapPlayer(this.props.winner) : null }</div>
                <div><button onClick={this.onClick}>重置</button></div>
            </div>
        );
    }
});

module.exports = GridStatus;