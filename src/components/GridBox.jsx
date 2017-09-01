var GridItem = require('GridItem');
var GridStatus = require('GridStatus');

var GridBox = React.createClass({
    getDefaultProps: function(){
        return{
            initialGrids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    },
    getInitialState: function(){
        return {
            grids: this.props.initialGrids,
            nowPlayer: 1,
            winner: 0,
        };
    },
    defaultState: function(){
        return {
            grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            nowPlayer: 1,
            winner: 0,
        };
    },
    drawGrid: function(idx){
        if(this.state.grids[idx] !== 0 || this.state.winner !== 0)
            return false;

        this.state.grids[idx] = this.state.nowPlayer;

        // get winner
        var rules = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        var isWinner = false;

        for (var i = 0; i < rules.length; i++) {
            for (var j = 0; j < rules[i].length; j++) {
                if (this.state.grids[rules[i][j]] !== this.state.nowPlayer) {
                    break;
                }
                if (j === (rules[i].length - 1)){
                    isWinner = true;
                    break;
                }
            }
        }

        if (isWinner)
            this.setState({ winner: this.state.nowPlayer });
        else
            this.setState({ nowPlayer: this.state.nowPlayer *= -1 });
    },
    mapPlayer: function(playerId)
    {
        var player = '';
        switch (parseInt(playerId)) {
            case 1:
                player = 'O';
                break;
            case -1:
                player = 'X';
                break;
        }
        return player;
    },
    reset: function(){
        this.setState(this.defaultState());
    },
    render: function(){
        return (
            <div className='gridbox'>
                {
                    this.state.grids.map(function (item, idx) {
                        return (
                            <GridItem idx={idx} drawGrid={this.drawGrid} mapPlayer={this.mapPlayer}>{item}</GridItem>
                        );
                    }.bind(this))
                }
                <GridStatus nowPlayer={this.state.nowPlayer} winner={this.state.winner} mapPlayer={this.mapPlayer} reset={this.reset}/>
            </div>
        );
    }
});

module.exports = GridBox;