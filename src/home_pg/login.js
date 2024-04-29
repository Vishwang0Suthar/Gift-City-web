import './login.css'

function login(){
    const conn = require('./connection')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/', async (req, res) => {
    try {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)

        conn.connect((err) => {
            if (err) {
                return console.error('error: ' + err.message);
            }
        });

        const sql = `SELECT AdminName,AdminPassword FROM admin WHERE AdminName=` + '"' + req.body.username + '"';

        conn.query(sql, async (error, results) => {
            if (error) {
                return console.error(error.message);
            }

            if (results.length === 0) {
                return res.status(400).send('Admin Name Not Found...')
            }

            const admin = results[0]

            try {
                if (await bcrypt.compare(req.body.password, admin.AdminPassword)) {
                    // const token = jwt.sign({ username: admin.AdminName }, process.env.ACCESS_TOKEN, { expiresIn: '5s' })
                    // res.json({ accessToken: token })
                    // globalToken = token
                    // console.log(globalToken)
                    res.redirect('/news')
                } else {
                    res.send('Not Allowed...')
                }
            } catch (error) {
                res.status(500).send('Error comparing Passwords...')
            }

        });

    } catch (error) {
        res.status(500).send()
    }
});
    return(
        <div class="container">
        <div class="form-box">
            <h1 id="title">Sign Up</h1>
                <div class="input-group">
                    <div class="input-field" id="nameField"/>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" name="username" placeholder="Email"/>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <p>Forgot Password? <a>Click Here</a></p>
                </div>
                <div class="btn-fied">
                    <button type="button" id="signupBtn">Sign Up</button>
                    <button type="button" id="signinBtn" class="disable">Sign In</button>
                </div>
            
        </div>
    
    )
}

export default login