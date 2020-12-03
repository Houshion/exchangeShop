import urlConfig from './index.js'

const request = (url = '', data = {}, method = 'GET', header = {}, dataType = 'application/json') => {
	return new Promise((resolve, reject) => {
		uni.request({
			method,
			url: urlConfig + url,
			data,
			header,
			dataType: dataType == 'form' ? 'application/x-www-form-urlencoded' : dataType,
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
