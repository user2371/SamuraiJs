import axios from "axios";

const baseURL = "https://samurai-mock-api.onrender.com";
const instance = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "API-KEY": "1f8db28f-a890-4e11-9abd-f0649576c692",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get("/users", {
      params: {
        _page: currentPage,
        _limit: pageSize,
      },
    });
  },

  follow(userId) {
    return instance.patch(`/users/${userId}`, { followed: true });
  },

  unFollow(userId) {
    return instance.patch(`/users/${userId}`, { followed: false });
  },

  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return instance.get("/auth");
  },

  login(login, password) {
    return instance.get("/usersCredentials", { params: { login, password } });
  },
  setAuth(data) {
    return instance.patch("/auth", data);
  },

  logout() {
    return instance.patch("/auth", {
      id: null,
      login: null,
      email: null,
      isAuth: false,
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profiles/` + userId);
  },

  // getProfileStatus(userId, newStatus) {
  //   debugger
  //   return instance.get(`profiles/` + userId, { status: newStatus });
  // },

  updateUserStatus(userId, newStatus) {
    return instance.patch(`/profiles/${userId}`, { status: newStatus });
  },
  updateUserPhoto(file) {
    let formData = new FormData();
    formData.append("image", file);
    return instance.put(`profiles/photo/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
