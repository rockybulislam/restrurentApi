import Auth from '../helpers/authHelper';

const auth = new Auth(process.env.JWT_SECRET);

const needAuth = (req, res, next) => {
	const token = req.cookies?.token;
	if (!token) {
		return res.status(401).json({ error: 'Missing authentication token' });
	}
	try {
		const user = auth.compareToken(token);
		if (!user) return res.status(401).json({ error: 'Unauthorized' });
		req.user = user;
		return next();
	} catch (error) {
		next(error);
	}
};

export default needAuth;
