import express, { NextFunction, request, Request, Response } from 'express'

export function validateUser(request: Request, response: Response, next: NextFunction) {
    const { userName, password } = request.body

    if (!userName || !password) {
        return response.json({
            mensagem: 'Dados inválidos'
        }).status(400)
    }

    next()
}

export function validateId(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    
    if (!id) {
        return response.json({
            mensagem: 'Id inválido'
        }).status(400)
    }

    next()
}

export function validateScrap(request: Request, response: Response, next: NextFunction) {
    const { title, description } = request.body

    if (!title || !description) {
        return response.json({
            mensagem: 'Scrap inválido'
        }).status(400)
    }

    next()
}

let globalToken: string = ''
export function validateToken(request: Request, response: Response, next: NextFunction) {
    const { token } = request.query

    if (globalToken) {
    if(!token || token !== globalToken) {
        return response.status(401).json({
            mensagem: 'Token inválido'
        })
    }
}
    next()
}