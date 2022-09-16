import service from "..";
export function getAllSongs(params){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${params}&limit=10&offset=1`//params是歌曲id
    })
}