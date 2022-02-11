import axios from 'axios';

export function get_cookie(cookie_name) {
  var results = document.cookie.match(
    '(^|;) ?' + cookie_name + '=([^;]*)(;|$)',
  );

  if (results) return unescape(results[2]);
  else return null;
}

export async function getUserIP() {
  try {
    const response = await axios.get(
      'https://www.cloudflare.com/cdn-cgi/trace',
    );

    const ip = await response.data
      .trim()
      .split('\n')
      .filter(item => item.includes('ip'))[0];

    const res = ip.slice(ip.indexOf('=') + 1);

    return res;
  } catch (error) {
    return false;
  }
}
