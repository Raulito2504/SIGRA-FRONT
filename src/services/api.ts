import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, // Si necesitas enviar cookies
});

// Ejemplo de request GET
export const getPing = async () => {
    const res = await api.get("/");
    return res.data;
};

// Ejemplo de request POST (login)
export const login = async (nombre_usuario: string, password: string) => {
    const res = await api.post("/auth/login", { nombre_usuario, password });
    return res.data;
};
