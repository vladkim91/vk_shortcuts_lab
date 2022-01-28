import VueRouter from 'vue-router';
import KeyboardDetails from './pages/KeyboardDetails';
import Home from './pages/Home';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  {
    path: '/keyboards/:keyboard_id',
    component: KeyboardDetail,
    name: 'KeyboardDetails'
  }
];

export default new VueRouter({ routes, mode: 'history' });
