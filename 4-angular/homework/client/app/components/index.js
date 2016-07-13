import angular from 'angular';

import addToCart from './addToCart'
import categoryProducts from './categoryProducts'
import categoryTree from './categoryTree'
import checkout from './checkout'
import navBar from './navBar'
import productDetails from './productDetails'

angular.module('mean-retail.components', [
		addToCart,
		categoryProducts,
		categoryTree,
		checkout,
		navBar,
		productDetails
	])

export default 'mean-retail.components';