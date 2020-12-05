import { Square } from "./Square";
import { IPoint, tShape } from "./Types";

export class SquareGroup{
    // 只读数组ReadonlyArray<>
    private _square:ReadonlyArray<Square>

    public get squares():ReadonlyArray<Square>{
        return this._square;
    }
    public get centerPoint():IPoint{
        return this._centerPoint;
    }
    public set centerPoint(val:IPoint){
        this._centerPoint = val;
        // 同时更改其他小方块的坐标
        this._shape.forEach((p,i) => {
            this._square[i].point = {
                x:this._centerPoint.x + p.x,
                y:this._centerPoint.y + p.y
            }
        })
    }
    public get shape(){
        return this._shape;
    }

    constructor(
        private _shape:tShape,
        private _centerPoint:IPoint,
        private _color:string){
        // 根据形状数组，中心坐标，以及颜色
        // 设置_square方块类数组
        const arr:Square[] = [];
        this._shape.forEach(p => {
            const sq = new Square();
            sq.color = this._color;
            sq.point = {
                x:this._centerPoint.x + p.x,
                y:this._centerPoint.y + p.y
            }
            arr.push(sq);
        })
        this._square = arr;
    }
}