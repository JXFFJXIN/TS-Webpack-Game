import { SquareGroup } from "../SquareGroup";
import { GameStatus, GameViewer } from "../Types";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from "jquery"
import { Game } from "../Game";
import GameConfig from "../GameConfig";
import PageConfig from "./PageConfig";

export class GamePageViewer implements GameViewer {
    private nextDom = $("#next");
    private panelDom = $("#panel");
    private scoreDom = $("#score");
    private msgDom = $("#msg");
    public init(game: Game): void {
        // 1. 设置区域宽高
        this.panelDom.css({
            width:GameConfig.panelSize.width * PageConfig.SquareSize.width ,
            height:GameConfig.panelSize.height * PageConfig.SquareSize.height
        })
        this.nextDom.css({
            width:GameConfig.nextSize.width * PageConfig.SquareSize.width,
            height:GameConfig.nextSize.height * PageConfig.SquareSize.height
        })
        // 2. 注册键盘事件
        $(document).on("keydown",function(e){
            console.log(e.key)
            if(e.key == "ArrowLeft"){
                game.controlLeft();
            }else if(e.key === "ArrowRight"){
                game.controlRight();
            }else if(e.key === "ArrowDown"){
                game.controlDown();
            }else if(e.key === "ArrowUp"){
                game.controlRotate();
            }else if(e.key === " "){
                if(game.gameStatus === GameStatus.init
                    ||game.gameStatus === GameStatus.pause
                    ||game.gameStatus === GameStatus.over
                    ){
                    game.start();
                }else if(game.gameStatus === GameStatus.playing){
                    game.pause();
                }
            }
        })
    }

    public showScore(score:number){
        this.scoreDom.html(score.toString());
    }

    public showNext(teris: SquareGroup): void {
        teris.squares.forEach(sq=>{
            sq.viewer = new SquarePageViewer(sq,this.nextDom)
        })
    }
    public switch(teris: SquareGroup): void {
        teris.squares.forEach(sq=>{
            sq.viewer!.remove();
            sq.viewer = new SquarePageViewer(sq,this.panelDom);
        })
    }
    onGameStart(): void {
        this.msgDom.hide();
    }
    onGamePause(): void {
        this.msgDom.css({
            display:"flex",
        });
        this.msgDom.find("p").html("游戏暂停")
    }
    onGameOver(): void {
        this.msgDom.css({
            display:"flex",
        });
        this.msgDom.find("p").html("游戏结束")
    }
}