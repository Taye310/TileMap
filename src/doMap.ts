class doMap extends egret.DisplayObjectContainer {
    private _grid: Grid;
    private _cellSize: number = 20;

    constructor() {
        super();
        this._grid = new Grid(10, 10);
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        for (var i = 0; i < config.length; i++) {
            for (var j = 0; j < config.length; j++) {
                var tile = config[i][j];
                //console.log(tile);
                var bitmap = new egret.Bitmap();
                bitmap.x = j * 100;
                bitmap.y = i * 100;
                this.addChild(bitmap);
                if (tile == 1) {
                    bitmap.texture = RES.getRes("grass_jpg");
                }
                if (tile == 0) {
                    bitmap.texture = RES.getRes("road_jpg");
                }
                this._grid.setWalkable(tile);
                container.addChild(bitmap);
            }
        }

    }
}

var config = [//map
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]]

// var config = [
//     { x: 0, y: 0, image: "road.jpg" },
//     { x: 0, y: 1, image: "road.jpg" },
//     { x: 0, y: 2, image: "road.jpg" },
//     { x: 1, y: 0, image: "road.jpg" },
//     { x: 1, y: 1, image: "road.jpg" },
//     { x: 1, y: 2, image: "road.jpg" },
//     { x: 2, y: 0, image: "road.jpg" },
//     { x: 2, y: 1, image: "road.jpg" },
//     { x: 2, y: 2, image: "road.jpg" }
// ]
