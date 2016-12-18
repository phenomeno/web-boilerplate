// import router from 'koa-router'
// import Todo from '../models/Todo'
// import { getAccount } from './account'
//
// export default router()
// .get('/api/todos', getTodos)
// .post('/api/todos/add', authorize, addTodos)
// .post('/api/todos/remove', authorize, removeTodos)
//
// async function getTodos(ctx) {
//     const response = await Todo.find({
//         createdBy: await getAccount(ctx.token)
//     }).limit(50).exec()
//
//     ctx.body = response
// }
