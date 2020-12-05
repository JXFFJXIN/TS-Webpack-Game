import { Square } from "../Square";
import $ from 'jquery';
import { IViewer } from "../Types";
import PageConfig from "./PageConfig";


// 显示一个小方块到页面上
export class SquarePageViewer implements IViewer{   
    
    public constructor(
        private square:Square,
        private container:JQuery<HTMLElement>
    ){
    }

    private dom?:JQuery<HTMLElement>
    private _isRemove:boolean = false;

    get isRemove(){
        return this._isRemove;
    }

    show(): void {
        if(this._isRemove){
            return;
        }
        if(!this.dom){
            this.dom = $("<div>").css({
                position:"absolute",
                width:PageConfig.SquareSize.width,
                height:PageConfig.SquareSize.height,
                border:"1px solid #ccc",
                boxSizing:"border-box"
            }).appendTo(this.container)
        }
        this.dom.css({
            left:this.square.point.x * PageConfig.SquareSize.width,
            top:this.square.point.y * PageConfig.SquareSize.height,
            background:this.square.color
        })
    }
    remove(): void {
        if(this.dom && !this._isRemove){
            this.dom.remove();
            this._isRemove = true;
        }
    }
}