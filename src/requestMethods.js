import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjU0NGU1ODc2NWNhMGEyZDc1NWI3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA4NzYwOCwiZXhwIjoxNjU2MzQ2ODA4fQ.j8Q1iZR8Bs2eYq75QtOBjFYTf64K6YqvX5QDiZy8rwA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers:{token: `Bearer ${TOKEN}`},
}); 