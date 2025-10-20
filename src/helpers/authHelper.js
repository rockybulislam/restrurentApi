// biome-ignore assist/source/organizeImports: <explanation>
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class Auth {
	#secret;

	constructor(secret = process.env.secret || 'jwt_secret') {
		this.#secret = secret;
	}
	signtoken(payload) {
		return jwt.sign(payload, this.#secret);
	}
	compareToken(token) {
		return jwt.verify(token, this.#secret);
	}
	async hashPassword(password, saltRounds = 10) {
		const salt = await bcrypt.genSalt(saltRounds);
		return bcrypt.hash(password, salt);
	}
	async comparePassword(password, hash) {
		return bcrypt.compare(password, hash);
	}
}

export default Auth;
