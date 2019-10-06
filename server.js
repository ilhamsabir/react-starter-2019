// server.js
const express = require('express')
const compression = require('compression')
const serveStatic = require('serve-static')
const morgan = require('morgan')
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

require('dotenv').config()

const apiProxyOptions = {
	// target api to reverse proxy
	target: 'http:localhost/kiosbaru/api',
	changeOrigin: true,
	pathRewrite: {
		'^/api': 'api',
	},
}

const logger = morgan('dev')

const apiProxy = proxy(apiProxyOptions)

const app = express()

app.use(logger)
app.use(compression())
app.use(history())

app.use(serveStatic(`${__dirname}/dist`))

app.use('/api', apiProxy)

const port = process.env.BUILD_PORT || 3001

app.listen(port, () => {
	// eslint-disable-next-line
	console.log(`server started ${port}`)
})