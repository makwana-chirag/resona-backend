import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🎵 Resona Server is vibrating on http://localhost:${PORT}`);
  console.log(`📖 Swagger docs available at http://localhost:${PORT}/api-docs`);
});