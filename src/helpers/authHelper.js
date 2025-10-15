

class Auth {
  #secret

constructor(secret = process.env.secret||'jwt_secret'){
    this.#secret = secret;
}
signtoken(payload)
}
