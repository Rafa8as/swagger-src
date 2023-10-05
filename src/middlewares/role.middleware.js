const roleAuth = allowedRoles => {
	return  (req, res, next) => {
		const { user } = req.session;
		if (!user || !allowedRoles.includes(user.role)) {
			return res.status(403).json({
				 status: 'Error',
				  message: `Forbidden : You don´t have permission to access`
				 });
		}
			
			next();
		};

		

};

export default roleAuth;