export function setAccessToken(token: string){
  localStorage.setItem('access_token', token);
}

export function setRefreshToken(token: string){
  localStorage.setItem('refresh_token', token);
}

export function getRefreshToken(){
  return localStorage.getItem('refresh_token');
}

export function getAccessToken(): string {
  return localStorage.getItem('access_token');
}
