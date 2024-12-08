import { connectToDatabase } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { question, options, correctAnswer } = req.body;

    if (!question || !options || typeof correctAnswer === 'undefined') {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    const db = await connectToDatabase();
    const quizCollection = db.collection('quiz');

    await quizCollection.insertOne({ question, options, correctAnswer });

    res.status(201).json({ message: 'Quiz question added!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
