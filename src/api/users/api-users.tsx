import { request } from "../environement";
import auth from "../helpers/api-helpers";


export const login = async (user: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Content-Length", user.toString().length);
    const { userAgent } = navigator
    var myInit: Object = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({ ...user, userAgent: userAgent })
    };
    const response = await fetch(request + "users/login", myInit)

    const result = await response.json()

    return { status: 200, ...result }
}
export const logout = async (user: any) => {
    const response = await fetch(request + "users/logout/" + user._id, {
        method: 'POST'
    })

    if (!response.ok) {
        return { ...response }
    }

    const result = await response.json()

    return { status: 200, ...result }
}
export const checkUserIsAdmin = async () => {
    // //console.log(user);
    try {
        const authData: any = await auth.isAuthenticated()
        let token = authData ? authData.auth_token : null

        const response = await fetch(request + "users/check/user/is/admin", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "Content-Length": token?.toString().length,
                'Authorization': 'Bearer ' + token
            },
            cache: 'default'
        })


        const result = await response.json()

        return result

    } catch (error) {
        return {
            status: 404,
            error: error
        }
    }
}
export const verifyEmailToken = async (token: any) => {
    // //console.log(user);
    try {
        const response = await fetch(request + "users/verify/account/" + token, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "Content-Length": token.toString().length
            },
            cache: 'default'
        })


        const result = await response.json()

        return { status: 200, ...result }

    } catch (error: any) {
        return error
    }
}
export const verifyAuthToken = async (token: any, userId = null) => {
    // //console.log(user);
    try {
        var myInit: any = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                // "Content-Length": userId.toString().length,
                'Authorization': 'Bearer ' + token
            },
            cache: 'default',
            body: JSON.stringify({}),
        };

        if (userId) {
            myInit.body = JSON.stringify({ userId: userId })
        }

        const response = await fetch(request + "users/verify/token", myInit)

        if (!response.ok) {
            const result = await response.json()
            //console.log(result);
            return { ...result }
        }
        const result = await response.json()

        return { status: 200, ...result }

    } catch (error) {
        return error
    }
}
