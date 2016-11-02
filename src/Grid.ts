class Grid {
     _x: number;
     _y: number;
     _arr: any;
     _start:TileNode;
     _end:TileNode;
     public walkable:boolean = true;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._arr = new Array();
        for (var i: number = 0; i < this._x; i++) {
            this._arr[i] = new Array();
            for (var j: number = 0; j < this._y; j++) {
                this._arr[i][j] = new Array(i, j);//Node(i,j)
            }
        }
    }
    public setWalkable(state:number){
        if(state==1)
        this.walkable=false;
        if(state==0)
        this.walkable==true;
    }
    public getStart(arrStart:TileNode){
        this._start=arrStart;
    }
    public getEnd(arrEnd:TileNode){
        this._end=arrEnd;
    }
    public setEndPoint(x: number, y: number): void {
        this._end = this._arr[x][y] as TileNode;
    }

    public setStartPoint(x: number, y: number): void {
        this._start = this._arr[x][y] as TileNode;
    }
}