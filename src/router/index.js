import VueRouter from 'vue-router';
import Form from '../views/form/index'

export const routes = [
  {
    path:'/Form',
    component: Form,
    meta:{
      title:'表单'
    }
  }
]
const router = new VueRouter({
  routes 
})



export default router