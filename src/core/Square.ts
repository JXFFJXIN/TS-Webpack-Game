// 小方块
// 属性 
// - 颜色

import { Point } from "./Types"

// - 坐标
export class Square{
    private _point:Point
    private _color:string

    public get point(){
        return this._point;
    }
    public set point(val){
        this._point = val;
    }
}