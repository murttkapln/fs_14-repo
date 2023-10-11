"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

module.exports = async function(userData) {

    const { username, password } = userData
    
    if (username && password) {
    
        const user = await Personnel.findOne({ username, password })
    
        if (user) {
    
            if (user.isActive) {
            // Login OK
    
                const accessData = {
                    _id: user._id,
                    departmentId: user.departmentId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    isActive: user.isActive,
                    isAdmin: user.isAdmin,
                    isLead: user.isLead,
                }
                const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, { expiresIn: '10m' })
    
                const refreshData = {
                    username: user.username,
                    password: user.password
                }
                const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, { expiresIn: '3d' })
    
                return {
                    error: false,
                    token: {
                        access: accessToken,
                        refresh: refreshToken
                    }
                }
    
            } else {
    
                // res.errorStatusCode = 401
                // throw new Error('This account is not active.')
                return {
                    error: true,
                    message: 'This account is not active.'
                }
            }
        } else {
    
            // res.errorStatusCode = 401
            // throw new Error('Wrong username or password.')
            return {
                error: true,
                message: 'Wrong username or password.'
            }
        }
    } else {
    
        // res.errorStatusCode = 401
        // throw new Error('Please enter username and password.')
        return {
            error: true,
            message: 'Please enter username and password.'
        }
    }
}