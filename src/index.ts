import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { SquareGroup } from "./core/SquareGroup";
import { createTeris, LShape } from "./core/Teris";
import { IPoint, MoveDirection } from "./core/Types";
import { TerisRule } from "./core/TerisRule";


const teris = createTeris({x:2,y:3})
teris.squares.forEach(sq=>{
    sq.viewer = new SquarePageViewer(sq,$("#root"))
})

$("#down").on("click",function(){
    TerisRule.move(teris,{
        x:teris.centerPoint.x,
        y:teris.centerPoint.y + 1
    })
})

$("#right").on("click",function(){
    TerisRule.move(teris,MoveDirection.right)
})

$("#left").on("click",function(){
    TerisRule.move(teris,MoveDirection.left)
})

$("#remove").on("click",function(){
    teris.squares.forEach(sq=>{
        if(sq.viewer){
            sq.viewer.remove();
        }
    })
})

$("#show").on("click",function(){
    teris.squares.forEach(sq=>{
        sq.viewer = new SquarePageViewer(sq,$("#root"))
    })  
})