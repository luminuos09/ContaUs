require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📝 Modo: ${process.env.NODE_ENV}`);
});