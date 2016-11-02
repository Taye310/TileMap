class TileNode {
	public x: number;
	public y: number;
	public f: number;
	public g: number;
	public h: number;

	public walkable: boolean = true;
	public parent: TileNode;


	// bitmap: egret.Bitmap = null;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

}