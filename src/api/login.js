import ajax from './ajxa'


export const loginuser = (user_name,pass,captcha) =>ajax('http://114.215.173.225:3000/api/v1/users/Login',{user_name,login_password:pass,captcha},'post')