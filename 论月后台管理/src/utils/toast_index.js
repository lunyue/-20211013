import Vue from "vue"
import Toast from '../components/common/toast.vue'

console.log(Toast);
//根据对象创建组件构造器
const ToastConstructor = Vue.extend(Toast);

function showsToast(texts) {
    const toastDOM = new ToastConstructor({
        el: document.createElement("div"),
        data() {
            return {
                text: texts,
                show: true,
            }
        }
    });
    // console.log(toastDOM);
    document.body.appendChild(toastDOM.$el);
    setTimeout(() => {
        toastDOM.show = false;
    }, 2000)
}

function toastRegisty(){
    Vue.prototype.$toast = showsToast
}
export default toastRegisty;