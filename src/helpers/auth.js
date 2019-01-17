// return a promise that we'll handle in our components
export function userAuth(url, opts) {
  // return fetch(`http://localhost:3000/api/users/${url}`, {
  //   method: opts.method || "get",
  //   headers: { "Content-Type": "application/json", ...opts.headers },
  //   body: opts.body,
  // });
}

// verify that the token is valid
export async function verifyUser() {
  // const userObj = JSON.parse(localStorage.getItem("user"));
  // if (!userObj) return;
  // const resp = await userAuth("verify", {
  //   headers: { Authorization: `Bearer ${userObj.token}` },
  // });
  // return await resp.json();
}
