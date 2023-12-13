import dotenv from "dotenv";
dotenv.config({});

import dayjs from 'dayjs';
import express from "express";
import { google } from 'googleapis';
import {v4 as  uuid} from  'uuid';




const calender = google.calender({

    version : "v3",
    auth :process.env.API_KEY,
})


const app = express()

const PORT =process.env.NODE_ENV || 8000

const oauth2Client = new google.auth.OAuth2( 
    process.env.CLIENTT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)
const scopes =[
   'https:www.googleapis.com/auth/calender'
];

const token ="";

app.get("/google" ,(req , res ) =>{

    const url =oauth2Client.generateAuthUrl({
        access_type : "offline",
        scope : scopes,
    })
    res.redirect(url);

});

app.get('/google/redirect',async(req , res) =>{
    const token = req.query.code;

    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens);

    


    

    res.send({
      msg :"You Have Successfully logged in ",
    });


});
app.get("/schedule_event",(req, res) =>{

    

    await calender.events.insert({
        calenderId : "primary",
        auth :oauth2Client,
        conferenceDataVersion : 1,
        requestBody : { 
        summary : "This is a test event",
        description : "Some event  that is very very important",
        start : {
            dateTime:  dayjs(new Date()).add(1 ,'day').toISOString(),
            timeZone: "Asia/Colombo",
        },
        end:{
            dateTime:  dayjs(new Date()).add(1 ,'day').add.(1 ,"hour")toISOString(),
            timeZone: "Asia/Colombo",

        },
        conferenceData :{
            createRequest :{
                requestId :uuid(),
            },
         },
         attendees :[
            {
              email: "ravididesilwa29mood@gmail.com",
         }
        ]
                
        },



    });
    res.send({
        msg:"Done",

    })


    



});

app.listen(PORT ,() =>{
    console.log("Server started on port ", PORT);
});