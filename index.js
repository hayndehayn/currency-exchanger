require('dotenv').config();
const express = require('express');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const port = process.env.PORT || 4000;

// Json and Static middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Swagger setup
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/api/exchange', async (req, res) => {
     try {
          const { from, to } = req.body;
          const response = await fetch(`https://api.api-ninjas.com/v1/exchangerate?pair=${from}_${to}`, {
               headers: { 'X-Api-Key': process.env.API_NINJAS_KEY },
          });
          // !response.ok
          const data = await response.json(); 
          res.json(data);
     } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Error retrieving exchange rate' });
     }
});

app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});

