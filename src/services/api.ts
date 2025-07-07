import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, 
});


export const getPing = async () => {
    const res = await api.get("/");
    return res.data;
};


export const login = async (nombre_usuario: string, password: string) => {
    const res = await api.post("/auth/login", { nombre_usuario, password });
    return res.data;
};
