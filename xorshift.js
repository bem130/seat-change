/* 参考 https://crocro.com/write/js_sample/?act=vw_itm&itm=xorshift#sample-xorshift_doc-txt */
(function() {
	const _t = init('rnum');
	_t.Xorshift = function(n) {
		let x, y, z, w;
		this.seed = function(n) {
			x = 123456789; y = 362436069; z = 521288629; w = n;
		}
		this.rnd = function() {
			const t = x ^ (x << 11);
			x = y; y = z; z = w;
			return w = (w^(w>>19))^(t^(t>>8));
		}
		this.seed(n);
	};
	function init(p) {
		try {return module.exports = {}} catch(e) {}
		return ((o, p) => {
			p.split('.').forEach(k => o = o[k]||(o[k]={}));
			return o})(window, p);
	};
})();