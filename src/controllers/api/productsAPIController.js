const { validationResult } = require('express-validator');
const createError = require('http-errors');

// ******** Sequelize ***********

const { Product, Brand, Category } = require('../../database/models');

module.exports = {
	
	latest: (req, res, next) => {
		Product.findAll(
			{order: [['createdAt', 'DESC']],
			limit : 8})

			.then ((result) => {
				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/latest"
					},
						data: result}
				)
			})
			.catch (errors => {
					res.send (errors)
			}
		)
	},

	offers: (req, res, next) => {
		Product.findAll(
			{ order: [['discount','DESC']],
			limit : 8})

			.then ((result) => {
				
				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/offers"
						},
					data: result}
				)
			})
			.catch (errors => {
				res.send (errors)
			}
		)
		
	},

	productsCategory: (req, res, next) => {
		Category.findOne(
			{where: {name: req.params.category}},
			{include: [{association: 'products'}]}
			)

			.then ((result) => {

				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/categories"
						},
					data: result}
				)
			})
			.catch (errors => {
				res.send (errors)
			}
		)
		
	}
		
}