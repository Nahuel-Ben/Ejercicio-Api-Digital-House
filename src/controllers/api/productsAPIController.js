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

	categories: (req, res, next) => {
		if (req.params.category) {

			Category.findOne ({
				where: {
					name: req.params.category
				}, include: ['products']
			})

			.then (result => 
				res.json({
					meta: {
						status: 200,
						url: "api/products/cateegories/" + req.params.category
						},
					data: result})
					
				)
		} else{
			Product.findAll()

			.then (result => 
				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/categories"
						},
					data: result}))
		}
		
	}
	/* async categories (req, res) {
		let where = {};
		let products = [];
		let title = "Todos los productos";

		if (req.params.category) {
			let category = await Category.findOne({
				where: {
				   name: req.params.category
				},
				include: ['products']
			})

			.then((result) => {
				
				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/" + req.params.category
						},
					data: result}
				)
			
			title = req.params.category;
			 
			if (category) {
				products = category.products
			}});
		} else {
			products = await Product.findAll(where)
			.then((result) => {
				
				res.json ({
					meta: {
						status: 200,
						count: result.length,
						url: "api/products/categories"
						},
					data: result}
				)
			} );
		}

		let categories = await Category.findAll({
			include: ['products']
		});

		res.json(categories)
	} */
}