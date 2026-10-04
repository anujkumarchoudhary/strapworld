
const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000/api/";

export const BaseUrl = baseUrl.endsWith("/")
  ? baseUrl
  : `${baseUrl}/`;