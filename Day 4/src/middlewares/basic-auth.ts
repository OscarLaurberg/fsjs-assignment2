var http = require('http')
var auth = require('basic-auth')
var compare = require('tsscmp')
import {Response} from "express"
import UserFacadeMemory from '../facades/user';
import UserFacadeDB from '../facades/userFacadeWithDB';
let UserFacade: any;
if (process.env["USE_USER_DB_FACADE_FOR_AUTHENTICATION"]) {
  UserFacade = UserFacadeDB;
} else {
  UserFacade = UserFacadeMemory;
}

 
// Create server
var authMiddleware = async function (req:any, res:Response,next:Function) {
  var credentials = auth(req)
 
  try {
    if (credentials && await UserFacade.checkUser(credentials.name, credentials.pass)) {
      const user = await UserFacade.getUser(credentials.name)
      req.userName = user.userName;
      req.role = user.role;
      return next();
    }
  } catch (err) { }
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
}
export default authMiddleware
