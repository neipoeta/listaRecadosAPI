import 'reflect-metadata'
import App from './core/presentation/App'
import dotenv from 'dotenv'

dotenv.config({
    path:'../.env'
})

const app = new App()
const port = process.env.PORT || 6060

app.init().then(_ => app.start(port))


// const users: any = [
//     {
//         userId: 1,
//         userName: 'NeiFernando',
//         password: 3232,
//     },
//     {
//         userId: uuidGenerator(),
//         userName: 'Taise ',
//         password: 2727
//     }
// ]

// app.get('/users', (request: Request, response: Response) => {
//     return response.json({ users })
// });

// app.get('/users/:id', (request: Request, response: Response) => {
//     const { id } = request.params;

//     if (!id) {
//         return response.status(400).json({
//             mensagem: 'ID inválido'
//         })
//     }

//     const user = users.find((user: any) => user.id == id)

//     if (!user) {
//         return response.status(404).json({
//             mensagem: 'Aluno não encontrado'
//         })
//     }
//     return response.json(user)
// })

// // app.post('/users', validateUser, (request: Request, response: Response) => {
// //     const { userName, password } = request.body;

// //     const user = new User(userName, password)
// //     users.push(user)

// //     return response.json({ users })
// // })

// app.put('/users/:id', [validateUser, validateId], (request: Request, response: Response) => {
//     const { id } = request.params;
//     const { userName, password } = request.body;

//     const user = users.find((user: any) => user.userId === id)
//     if (!user) {
//         return response.json({ mensagem: 'Usuario não encontrado' }).status(404)
//     }

//     user.userName = userName;
//     user.password = password;


//     return response.json({ user })
// });

// app.delete('/users/:id', validateId, (request: Request, response: Response) => {
//     const { id } = request.params;

//     const userIndex = users.findIndex((user: any) => user.userId === id)
//     if (userIndex < 0) {
//         return response.json({ mensagem: 'Usuario não encontrado' }).status(404)
//     }

//     users.splice(userIndex, 1)
//     return response.sendStatus(204)
// });

// let globalToken: string = ''
// app.post('/login', (request: Request, response:Response) => {
//     const { userName, password } = request.body
//     if (userName === 'NeiFernando' && password === '3232') {
//         globalToken = Math.random().toString(36).substring(2)

//         return response.json({
//             token: globalToken
//         })
//     }

//     return response.status(401).json({
//         mensagem: 'Login e senha inválidos'
//     })
// })

// const scraps: any = [
//     {
//         title: 'Danger',
//         description: 'Hurry....',
//     },
//     {
//         title: 'Danger',
//         description: 'Hurry....',
//     }
// ]

// app.get('/scraps', validateToken,(request: Request, response: Response) => {
//     return response.json({ scraps })
// })


// app.get('/users/:userId/scraps', (request: Request, response: Response) => {
//     const { userId, id } = request.params;

//     if (!userId || !id) {
//         return response.json({
//             mensagem: 'Dados inválidos'
//         }).status(400)
//     }

//     const userIndex = users.findIndex((user: any) => user.userId === userId)
//     if (userIndex < 0) {
//         return response.json({ mensagem: 'Usuario não encontrado' }).status(404)
//     }
// });

// app.post('/users/scraps', validateScrap, (request: Request, response: Response) => {
//     const { userId } = request.params;
//     const { title, description } = request.body;

//     if (!title || !description || !userId) {
//         return response.json({
//             mensagem: 'Dados inválidos'
//         }).status(400)
//     }

//     if (description === 'income' || description === 'outcome') {
//         const userIndex = users.findIndex((user: any) => user.userId === userId)
//         if (userIndex < 0) {
//             return response.json({ mensagem: 'Usuario não encontrado' }).status(404)
//         }

//         const scrap = new Scrap(title, (description))

//         // users[userIndex].addScrap(scrap)

//         return response.json(users[userIndex])
//     } else {
//         return response.json({ mensagem: 'Tipo invalido' }).status(401)
//     }
// });
