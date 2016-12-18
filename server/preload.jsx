// import pathToRegExp from 'path-to-regexp-es6'
// import Hello from '../../app/pages/Home.jsx'
//
// // All your server side prefetching is done here
// // When a route is matched, the static function is executed
// const routes = [
//     {
//         pattern: '/',
//         execute: Home.onEnter
//     }
// ]
//
// // Execute server-side async methods to refetch data
// export default (stores, url) => {
//     const matches = routes.filter(r => !!pathToRegExp(r.pattern).exec(url))
//     return Promise.all(matches.map(route => route.execute(stores)))
// }
