import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Service from '../views/pages/service';
 
 
const routes = {
  '/home': Home, // default page
  '/about': About,
  '/contact': Contact,
  '/detail/:id': Detail,
  '/service': Service,
};
 
export default routes;