export  const LOGO =
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR =
"https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXh10ggeTTdhZO1JIH_SNQ4gp0vsNnWfE8Mg2ckwzGvUzJMRpPFCujRK3Ex5K9VbkIyvUHQ92LBVdsemkj6zlpquL-qWMCNKeg.png?r=229";


export const API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
 },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = 
"https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg" 
     

export const SUPPORTED_LANGUAGE = [{ identifier:"en", name:"English"}, 
{ identifier:"hindi", name:"Hindi"},{ identifier:"spanish", name:"Spanish"}]
      
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;





















