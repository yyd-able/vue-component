import VueRouter from 'vue-router';
import Form from '../views/form/index'
import CheckBox from '../views/checkbox/index'
export const routes = [
  {
    path:'/Form',
    component: Form,
    meta:{
      title:'表单'
    }
  },
  {
    path:'/CheckBox',
    component: CheckBox,
    meta:{
      title:'多选框'
    }
  }
]
const router = new VueRouter({
  routes 
})



export default router