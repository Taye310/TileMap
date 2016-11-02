var Grid = (function () {
    function Grid(x, y) {
        this.walkable = true;
        this._x = x;
        this._y = y;
        this._arr = new Array();
        for (var i = 0; i < this._x; i++) {
            this._arr[i] = new Array();
            for (var j = 0; j < this._y; j++) {
                this._arr[i][j] = new Array(i, j); //Node(i,j)
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.setWalkable = function (state) {
        if (state == 1)
            this.walkable = false;
        if (state == 0)
            this.walkable == true;
    };
    p.getStart = function (arrStart) {
        this._start = arrStart;
    };
    p.getEnd = function (arrEnd) {
        this._end = arrEnd;
    };
    p.setEndPoint = function (x, y) {
        this._end = this._arr[x][y];
    };
    p.setStartPoint = function (x, y) {
        this._start = this._arr[x][y];
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=Grid.js.map