import data from '../store/data.json'

class LoginServices{

    isAdmin = (userName, password) => {
       return data.admins.filter(admin => admin.userName === userName && admin.password === password)[0]
    }
}
export default new LoginServices();