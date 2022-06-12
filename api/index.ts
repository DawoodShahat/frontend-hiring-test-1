import request from "../utils/refreshTokenInterceptors";

export const login = (data) =>
  request({
    url: "auth/login",
    method: "POST",
    data,
  });

export const getCalls = (offset, limit) => {
  const params = new URLSearchParams();
  params.append('offset', offset);
  params.append('limit', limit);

  return request({
    url: `calls?${params.toString()}`,
    method: "GET",
  });
}

export const getSingleCall = (id) =>
  request({
    url: `calls/${id}`,
    method: "GET",
  });

export const archiveCall = (id) =>
  request({
    url: `calls/${id}/archive`,
    method: "PUT",
  });