import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  console.log(res.getHeaders());
  res.send('Hello, this is from the test route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
