import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { SquareGroup } from "./core/SquareGroup";
import { createTeris, LShape } from "./core/Teris";
import { IPoint, MoveDirection } from "./core/Types";
import { TerisRule } from "./core/TerisRule";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
import { Game } from "./core/Game";

var g = new Game(new GamePageViewer());
$("#pause").on("click",function(){
    g.pause();
})
$("#start").on("click",function(){
    g.start();
})
$("#left").on("click",function(){
    g.controlLeft();
})
$("#right").on("click",function(){
    g.controlRight();
})
$("#down").on("click",function(){
    g.controlDown();
})
$("#rotate").on("click",function(){
    g.controlRotate();
})