import service from "..";
export function getSingleSong(id){
   return service({
    method:"GET",
    url:`/lyric?id=${id}`
   })
}