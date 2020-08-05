// =========================================
// ================deployment===================
// ===========================================

import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://jordaniapereyra/"
    : "http://localhost:3001";

const api = axios.create({
  baseURL: baseUrl,
});
