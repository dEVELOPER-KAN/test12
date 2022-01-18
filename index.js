const app = require('./config');
const session = require("express-session");
const AuthController = require('./controller/AuthController')

app.set('view engine', 'pug');
app.set('views', './views');
app.use(session({
    secret: process.env.G_SECRET, resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 2 * 60 * 1000
    }
}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/login', AuthController);
app.use("/", (Request, Response, next) => {
    Response.render(`index`);
});
