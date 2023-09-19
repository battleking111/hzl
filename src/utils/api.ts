import http from "./http";

export const getlogin = (data: any) => http.post('/admin/login', data)