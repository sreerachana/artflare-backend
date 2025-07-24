const app = require('./app');
require('dotenv').config();

PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.listen(PORT, '0.0.0.0', (err) => {
    if(!err){
    console.log(`Server is running on port http://0.0.0.0:${PORT}`);
    }else{
        console.error(`Error starting server: ${err}`);
    }
});
