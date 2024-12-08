import { connectToDatabase } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = await connectToDatabase();
    const quizCollection = db.collection('quiz');

    const questions = await quizCollection.find().toArray();

    res.status(200).json(questions);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
