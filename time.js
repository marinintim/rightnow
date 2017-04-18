let $ = document.querySelector.bind(document)
let elems = {
	hours: $('.hours'),
	minutes: $('.minutes'),
	seconds: $('.seconds')
}

function updateTimer() {
	var now = new Date
	var timer = {
		hours: now.getHours(),
		minutes: now.getMinutes(),
		seconds: now.getSeconds(),
	}

	for (let key in timer) {
		elems[key].innerHTML = padZero(timer[key])
	}

	setTimeout(updateTimer, 500)
}

function padZero(t) {
	t = t.toString()
	return t.length == 1 ? '0' + t : t
}

updateTimer()
