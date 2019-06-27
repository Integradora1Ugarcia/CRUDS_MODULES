const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const app = encargada de tener toda la funcionalidad el server.
const app = express();

const { mongoose } = require('./database');

/* Settings */
// Toma un puerto disponible o el 3000.
app.set('port', process.env.PORT || 3000); 


/* Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


/* Routes */
app.use('/api/employees' ,require('./routes/employee.routes'));
app.use('/api/users' ,require('./routes/user.routes'));
app.use('/api/schedules' ,require('./routes/schedule.routes'));
app.use('/api/pcs' ,require('./routes/pc.routes'));


//Starting server in port 3000
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})