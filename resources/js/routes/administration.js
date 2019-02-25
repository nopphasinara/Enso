import routeImporter from '../modules/importers/routeImporter';

const routes = routeImporter(require.context('./administration', false, /.*\.js$/));
const RouterView = () => import('../core/Router.vue');

export default {
    path: '/administration',
    component: RouterView,
    meta: {
        breadcrumb: 'administration',
    },
    children: routes,
};
