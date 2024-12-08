let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');
//
//let meetingSchema = new Schema({
// QuizID: String,
// Name: String,
// Questions: String,
// Score: String,
// Type: String
// }, { collection: 'Quiz' });

let meetingSchema = new Schema({
  name: String,        // Updated to lowercase "name"
  image: String        // Added "image" field
}, { collection: 'Quiz' });

let meetings = oldMong.model('Quiz', meetingSchema);

// Route to get all meetings
                            router.get('/', async function (req, res, next) {
  const meetingsData = await getMeetings();
  res.render('index', { meetings: meetingsData.meetings });
});

// Route to get meetings in JSON form
router.post('/getMeetings', async function (req, res, next) {
  const meetingsData = await getMeetings();
  res.json(meetingsData);
});

async function getMeetings() {
  // Retrieve data from the database
  const data = await meetings.find().lean();

  // Log the data retrieved from the database
  console.log("Retrieved Meetings from Database:", JSON.stringify(data, null, 2));

  // Create the response object
  const response = { meetings: data };

  // Log the response object that will be sent back
  console.log("Response being sent back:", JSON.stringify(response, null, 2));

  // Return the response object
  return response;
}

// Route to save a meeting
router.post('/saveMeeting', async function (req, res, next) {
  // Console log the request body to inspect the incoming data
  console.log("Request body:", JSON.stringify(req.body, null, 2));

  // Save the meeting using the request body
  const meetingResponse = await saveMeeting(req.body);

  // Send the response back
  res.json(meetingResponse);
});

async function saveMeeting(theMeeting) {
  console.log('theMeeting:', JSON.stringify(theMeeting, null, 2));

  try {
    // Attempt to create a new meeting entry in the database
    await meetings.create(theMeeting);
    console.log('Meeting saved successfully.');
    return { saveMeetingResponse: "success" };
  } catch (err) {
    console.error('Could not insert new meeting:', err);
    return { saveMeetingResponse: "fail" };
  }
}

module.exports = router;
