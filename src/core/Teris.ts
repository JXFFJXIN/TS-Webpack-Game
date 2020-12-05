import { SquareGroup } from "./SquareGroup";
import { IPoint, tShape } from "./Types";
import { getRandom } from "./utils";

export const TShape:tShape = [
    {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}
]
export const LShape:tShape = [
    {x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:0,y:-1}
]
export const LMirrorShape:tShape = [
    {x:2,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:-1}
]
export const SShape:tShape = [
    {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}
]
export const SMirrorShape:tShape = [
    {x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}
]
export const SquareShape:tShape = [
    {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}
]
export const LineShape:tShape = [
    {x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}
]
export const shapes = [
    TShape,
    LShape,
    LMirrorShape,
    LineShape,
    SShape,
    SquareShape,
    SMirrorShape
]

export const colors = [
    "red",
    "#fff",
    "green",
    "blue",
    "orange"
]

// 随机产生一个俄罗斯方块（颜色随机，形状随机）
export function createTeris(centerPoint:IPoint){
    let index = getRandom(0,shapes.length);
    const shape = shapes[index];
    index = getRandom(0,colors.length);
    const color = colors[index];
    return new SquareGroup(shape,centerPoint,color);
}