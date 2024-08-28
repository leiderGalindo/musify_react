const grantType     = import.meta.env.VITE_GRANT_TYPE_SPOTIFY
const clientId      = import.meta.env.VITE_CLIENT_ID_SPOTIFY
const clientSecret  = import.meta.env.VITE_CLIENT_SECRET_SPOTIFY
const BaseUrlApi  = import.meta.env.VITE_BASE_URL_API_TOKEN

export const getToken = async () => {
  const urlencoded = new URLSearchParams({
    'grant_type': grantType,
    'client_id': clientId,
    'client_secret': clientSecret,
  });
  
  const requestOptions:RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded,
    redirect: "follow"
  };
  
  return await fetch(`${BaseUrlApi}/token`, requestOptions)
    .then(async res => {
      if(!res.ok) throw new Error('Error get token spotify')
      return await res.json()
    })
    .then(res => {
      return res
    })
    .catch(error => {
      console.log('Error get token spotify', error)
      throw new Error('Error get token spotify')
    })
}