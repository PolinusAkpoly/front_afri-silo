import { checkUserIsAdmin, logout, verifyAuthToken } from "../users/api-users"

const auth = {
    async isAuthenticated() {
        if (typeof window === "undefined")
            return false

        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt')
            if (jwt)
                var { userId, auth_token } = JSON.parse(jwt)

            if (!auth_token) {
                return false
            }
            const verify = await verifyAuthToken(auth_token, userId)

            if (verify.status === 200) {
                const jwt = localStorage.getItem('jwt') 
                if(jwt)
                   return jwt

            } else {
                localStorage.removeItem('jwt')
                return false
            }
        }
        else
            return false
    },

    authenticate(jwt: any, cb: any) {
        if (typeof window !== "undefined")
            localStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
    },

    async isAdmin() {
        const isAdmin = await checkUserIsAdmin()
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin.status === 200))
        return isAdmin.status === 200
    },
    
    clearJWT(cb: any) {

        if (typeof window !== "undefined") {
            const jwt = localStorage.getItem('jwt')
            if (jwt)
                var { userId, auth_token, email } = JSON.parse(jwt)

            localStorage.removeItem('jwt')
        }
        logout({ _id: userId, email: email }).then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
        cb()
        //optional
    }
}

export default auth