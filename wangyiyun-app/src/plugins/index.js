import { Swipe, SwipeItem ,Popup} from 'vant';
import Button from 'vant';
let plugins=[Swipe,SwipeItem,Button,Popup]
function getVant(app){
    plugins.forEach(item=>{
        app.use(item)
    })
}
export default getVant