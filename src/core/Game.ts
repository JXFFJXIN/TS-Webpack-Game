import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { createTeris } from "./Teris";
import { TerisRule } from "./TerisRule";
import { GameStatus, GameViewer, MoveDirection } from "./Types";
import { GamePageViewer } from "./viewer/GamePageViewer";

export class Game {
    // 游戏状态
    private _gameStatus:GameStatus = GameStatus.init;

    // 当前玩家操作的方块
    private _curTeris?:SquareGroup;

    // 下一个方块
    private _nextTeris:SquareGroup = createTeris({x:0,y:0});

    // 计时器
    private _timer?:number; // 浏览器中的计数器本质是一个数字

    // 自动下落的间隔时间
    private _duration:number = 1000;

    // 重新设置中心点的坐标,以达到让该方块出现在区域的中上方
    private resetCenterPoint(width:number,teris:SquareGroup){
        const x = Math.ceil(width/2)  ;
        const y = 0;
        teris.centerPoint = {x,y};
        while(teris.squares.some(it => it.point.y < 0)){
            teris.squares.forEach(sq=>{
                sq.point = {
                    x:sq.point.x,
                    y:sq.point.y + 1
                }                
            })
        }
    }

    // 游戏显示
    public constructor(private _viewer:GamePageViewer){
        this.resetCenterPoint(GameConfig.nextSize.width,this._nextTeris);
        this._viewer.showNext(this._nextTeris);
    }

    // 游戏开始
    public start(){
        // 游戏状态的改变
        if(this._gameStatus === GameStatus.playing){
            return;
        }
        this._gameStatus = GameStatus.playing;
        if(!this._curTeris){
            // 给当前玩家操作的方块赋值
            this.switchTeris();
        }
        this.autoDrop()
    }

    // 游戏暂停
    public pause(){
        if(this._gameStatus === GameStatus.playing){
            this._gameStatus = GameStatus.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }

    // 向左操作
    public controlLeft(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeris,MoveDirection.left);
        }
    }

    // 向右操作
    public controlRight(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeris,MoveDirection.right);
        }
    }

    // 向下操作
    public controlDown(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.moveDirectly(this._curTeris,MoveDirection.down);
        }
    }

    // 旋转操作
    public controlRotate(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.rotate(this._curTeris);
        }
    }

    // 当前方块自由下落
    private autoDrop(){
        if(this._timer || this._gameStatus !== GameStatus.playing){
            return;
        }
        this._timer = setInterval(()=>{
            if(this._curTeris){
               TerisRule.move(this._curTeris,MoveDirection.down); 
            }
        },this._duration)
    }

    // 切换方块
    private switchTeris(){
        this._curTeris = this._nextTeris;
        this.resetCenterPoint(GameConfig.panelSize.width,this._curTeris);
        this._nextTeris = createTeris({x:0,y:0})
        this.resetCenterPoint(GameConfig.nextSize.width,this._nextTeris)
        this._viewer.switch(this._curTeris);
        this._viewer.showNext(this._nextTeris);
    }
}