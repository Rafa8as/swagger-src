import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema({
	title: String,
	description: String,
	code: {
		type: String,
		unique: true,
	},
	price: Number,
	status: {
		type: Boolean,
		default: true,
		unique: false,
	},
	stock: Number,
	category: String,
	owner: {
		type: String,
		default: 'rafa8as@gmail.com',
	}
});

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model('Products', productSchema);
