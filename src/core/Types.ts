import { SquareGroup } from "./SquareGroup";

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

// 游戏状态
export enum GameStatus{
    init, // 未开始
    playing,//进行中
    pause,// 暂停
    over// 游戏结束
}

// 游戏类显示者
export interface GameViewer{
    // 下一个方块对象
    showNext(teris:SquareGroup):void,
    // 切换的方块对象
    switch(teris:SquareGroup):void,

}