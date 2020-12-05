// 根据最小值和最大值得到该范围的随机数
export function getRandom(min:number,max:number){
    const dec = max - min;
    return Math.floor(Math.random()*dec + min)
}