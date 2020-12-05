export interface IPoint {
    readonly x:number
    readonly y:number
}
export interface IViewer {
    // 显示函数
    show():void;

    // 移除显示
    remove():void;
}

// 形状
export type tShape = IPoint[] 

// 移动方向
export enum MoveDirection  {
    left,
    right,
    down
}