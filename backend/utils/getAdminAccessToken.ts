async function getAdminAccessToken(): Promise<string> {
  if (typeof window === "undefined") {
    throw new Error("Browser session unavailable");
  }

  const token =
    localStorage.getItem("adminAccessToken") ||
    localStorage.getItem("token");

  if (!token) {
    throw new Error("Admin session not found. Please sign in again.");
  }

  return token;
}