// import React from 'react';
// import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './views/app/App';
import Hello from './views/hellow/index'
// const BasicRoute = () => (
//     <HashRouter>
//         <Switch>
//             <Route exact path="/" component={App}/>
//             <Route exact path="/hello" component={Hello}/>
//         </Switch>
//     </HashRouter>
// );
// export default BasicRoute;
 const router = [
     {
         link:'/',
         component: App,
         text:'Home'
     },{
         link:'/hellow',
         component:Hello,
         text:'Hello'
     }
 ]
 export default  router;