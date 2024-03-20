import prisma from '../db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
    console.log('Username:', req.body.username);
    console.log('Password:', req.body.password);
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({ token })
}

export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401)
        res.json({message: 'nope'})
        return
    }

    const token = createJWT(user)
    res.json({ token })
}