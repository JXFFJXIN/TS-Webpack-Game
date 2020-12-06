import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { IPoint, MoveDirection, tShape } from "./Types";
// 类型判断函数
function isPoint(obj:any):obj is IPoint {
    return typeof obj.x !== "undefined"
}


// 提供一系列的函数，根据游戏规则判断各种情况
export class TerisRule {
    // 判断某个形状的方块，是否能够移动到目标位置
    static canIMove(shape:tShape,targetPoint:IPoint):boolean{
        // 假设，中心点已经移动到了目标位置，算出每个小方块的坐标
        const targetSquarePoints:IPoint[] = shape.map(it=>{
            return {
                x:it.x + targetPoint.x,
                y:it.y + targetPoint.y
            }
        })
        //边界判断
        const rule =  targetSquarePoints.some(p=>{
            // 是否超出了边界
            return p.x<0||p.x>GameConfig.panelSize.width - 1||
                p.y<0||p.y>GameConfig.panelSize.height - 1

        })
        if(rule){
            return false;
        }
        return true;
    }   

    // 函数存在
    static move(teris:SquareGroup,targetPoint:IPoint):boolean;
    static move(teris:SquareGroup,direction:MoveDirection):boolean;
    static move(teris:SquareGroup,targetPointOrDirection:IPoint|MoveDirection):boolean{
        if(isPoint(targetPointOrDirection)){
            if(this.canIMove(teris.shape,targetPointOrDirection)){
                teris.centerPoint = targetPointOrDirection
                return true;
            }
            return false;
        }else {
            let targetPoint:IPoint = {
                x:0,
                y:0
            };
            if(targetPointOrDirection === MoveDirection.down){
                targetPoint = {
                    x:teris.centerPoint.x,
                    y:teris.centerPoint.y + 1
                }
            }
            else if(targetPointOrDirection === MoveDirection.left){
                targetPoint = {
                    x:teris.centerPoint.x - 1,
                    y:teris.centerPoint.y
                }
            }
            else if(targetPointOrDirection === MoveDirection.right){
                targetPoint = {
                    x:teris.centerPoint.x + 1,
                    y:teris.centerPoint.y
                }
            }
            return this.move(teris,targetPoint)
        }
    }

    /* 
    * 将当前的方块,移动到目标方向的最终位置    
    */
    static moveDirectly(teris:SquareGroup,direction:MoveDirection){
        while(this.move(teris,direction)){}
    }

    static rotate(teris:SquareGroup):boolean{
        const newP = teris.afterRotateShape();
        if(this.canIMove(newP,teris.centerPoint)){
            teris.rotate();
            return true;
        }else{
            return false
        }
    }
}

// 