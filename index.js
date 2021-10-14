const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const cookieParser = require("cookie-parser");

const static = path.resolve(__dirname, "static/index.ejs")
let google = false
let mixpanel = false
let hubspot = false
let name = ''
app.use(express.static('static'));
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

async function start() {
    try {
        const PORT = process.env.PORT || 5000

        app.listen(PORT, () => {
            console.log('server has been started')
        })


        app.get('/', (req, res) => {
            const scriptsObj = req.cookies?.scripts
            google = scriptsObj ? scriptsObj.google : false
            mixpanel = scriptsObj ? scriptsObj.mixpanel : false
            hubspot = scriptsObj ? scriptsObj.hubspot : false
            res.render(static, {
                title: "Work title",
                google,
                mixpanel,
                hubspot,
            })

        })
        app.post('/check', (req, res) => {
            res.cookie('scripts', {...req.body})
            const scriptsObj = req.cookies?.scripts
            google = scriptsObj ? scriptsObj.google : false
            mixpanel = scriptsObj ? scriptsObj.mixpanel : false
            hubspot = scriptsObj ? scriptsObj.hubspot : false
            res.render(static, {
                title: "123",
                google,
                mixpanel,
                hubspot
            })
        })

    } catch (e) {
        console.log(e)
    }
}


start()




