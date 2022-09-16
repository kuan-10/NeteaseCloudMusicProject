import service from "..";
export function getSearchSong(keyword){
    return service({
        method:"GET",
        url:`/cloudsearch?keywords=${keyword}`
    })
}