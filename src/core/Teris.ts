import { SquareGroup } from "./SquareGroup";
import { IPoint } from "./Types";
import { getRandom } from "./utils";

export class TShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}],
            _centerPoint,_color
        );
    }
}

// export const TShape:tShape = [
//     {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}
// ]

export class LShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:0,y:-1}],
            _centerPoint,_color
        );
    }
}
// export const LShape:tShape = [
//     {x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:0,y:-1}
// ]

export class LMirrorShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:2,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:-1}],
            _centerPoint,_color
        );
    }
}
// export const LMirrorShape:tShape = [
//     {x:2,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:-1}
// ]

export class SShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}],
            _centerPoint,_color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock;
    }
}
// export const SShape:tShape = [
//     {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}
// ]

export class SMirrorShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}],
            _centerPoint,_color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock;
    }
}
// export const SMirrorShape:tShape = [
//     {x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}
// ]

export class SquareShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],
            _centerPoint,_color
        );
    }
    afterRotateShape(){
        return this.shape;
    }
}
// export const SquareShape:tShape = [
//     {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}
// ]

export class LineShape extends SquareGroup {

    constructor(
        _centerPoint:IPoint,
        _color:string
    ){
        super(
            [{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}],
            _centerPoint,_color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock;
    }
}
// export const LineShape:tShape = [
//     {x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}
// ]
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
    "green",
    "blue",
    "orange"
]

// 随机产生一个俄罗斯方块（颜色随机，形状随机）
export function createTeris(centerPoint:IPoint):SquareGroup{
    let index = getRandom(0,shapes.length);
    const shape = shapes[index];
    index = getRandom(0,colors.length);
    const color = colors[index];
    return new shape(centerPoint,color);
}