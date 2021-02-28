const db = require('../../database/models');

module.exports = {
	
	// Root - Show all products
	latest: (req, res, next) => {
			 db.Product.findAll(
				{order: [['createdAt', 'DESC']],
				limit : 3})
				.then ((data) => {
					res.json ({
						meta: {
							status: 200,
							count: data.length,
							url: "api/products/latest"
							},
						data: data}
					)
				})
				.catch (errors => {
					res.send (errors)
				})
	},

	offers: (req, res, next) => {
		db.Product.findAll(
			{ order: [['discount','DESC']],
			limit : 7})
			.then ((data) => {
				res.json ({
					meta: {
						status: 200,
						count: data.length,
						url: "api/products/offers"
						},
					data: data}
				)
			})
			.catch (errors => {
				res.send (errors)
			})
		
	}
		
}