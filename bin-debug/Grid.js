var Grid = (function () {
    function Grid(x, y) {
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
    };
    p.getStart = function (arrStart) {
        this._start = arrStart;
    };
    p.getEnd = function (arrEnd) {
        this._end = arrEnd;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=Grid.js.map