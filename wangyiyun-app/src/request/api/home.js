import service from "..";
//获取首页轮播图的数据
export function getBanner(){
    return service(
        {
            method:"GET",
            url:'banner?type=2'
        }
    )
}
//获取推荐歌单数据
export function getSongRecommend(){
    return service(
        {
        method:"GET",
        url:'/personalized?limit=20'
    }
    )
}
