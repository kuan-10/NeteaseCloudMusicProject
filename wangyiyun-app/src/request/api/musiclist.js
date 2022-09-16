import service from "..";
export function getSongDetail(params){
return service({
    method:"GET",
    url:`/playlist/detail?id=${params}`
})
}