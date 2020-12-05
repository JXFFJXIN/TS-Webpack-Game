// 小方块
// 属性 
// - 颜色

import { IPoint, IViewer } from "./Types"

// - 坐标
export class Square{
    private _point:IPoint = {
        x:0,
        y:0
    }

    private _color:string = "red"

    // 属性：显示者
    private _viewer?:IViewer

    public get viewer(){
        return this._viewer;
    }

    public set viewer(v){
        this._viewer = v;
        if(v){
            v.show();
        }
    }

    public get point(){
        return this._point;
    }
    // sq.point.x = ? 可以绕开set函数
    // 解决方法
    // - Point做成类，并对其中的xy进行访问器配置
    // - Point中的xy变为只读
    public set point(val){
        this._point = val;
        // 完成显示
        if(this._viewer){
            this._viewer.show()
        }
    }

    public get color(){
        return this._color;
    }

    public set color (val) {
        this._color = val;
    }
}