import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import twilio from 'twilio';

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config();

const port = 3001

app.post("/callForHelp", function(request, response){
    
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'URGENT Elizabeth needs help!!!!!! ',
     from: '+13655445227',
     to: '+14038619612'
   })
  .then(message => console.log(message.sid));
    response.send('ok')
})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});