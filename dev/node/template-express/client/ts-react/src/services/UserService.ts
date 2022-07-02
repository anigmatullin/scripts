import http from "../http/client-axios";
import IUserData from "../types/User";

async function getAll()
{
    const req = await http.get<Array<IUserData>>("/users");
    return req.data;
};

async function get(id: any)
{
    const req = await http.get<IUserData>(`/users/${id}`);
    return req.data;
};

async function create(data: IUserData)
{
    const req = await http.post<IUserData>("/users", data);
    return req.data;
};

async function update(id: any, data: IUserData)
{
    const req = await http.put<any>(`/users/${id}`, data);
    return req.data;
};

async function remove(id: any)
{
    const req = await http.delete<any>(`/users/${id}`);
    return req.data;
};

async function removeAll()
{
    const req = await http.delete<any>(`/users`);
    return req.data;
};

async function findByName(title: string)
{
    const req = await http.get<Array<IUserData>>(`/users?name=${title}`);
    return req.data;
};

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName,
};

export default UserService;
