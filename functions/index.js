const functions = require('firebase-functions');
const cors = require("cors")({ origin: true });
const fs = require("fs")
const UUID = require("uuid/v4");
var admin = require("firebase-admin");

var serviceAccount = require("./snrfirebase.json");

const {Storage} = require("@google-cloud/storage");

const googleConfig = new Storage({
    projectID: "snrfirebase",
    keyFilename: "snrfirebase.json"
   });

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://snrfirebase.firebaseio.com"
  });
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.uploadPicture = functions.https.onRequest((request, response) => {

    // Storing Image Locally by fetching this function
    cors(request, response, () => {
        const body = JSON.parse(request.body)
        
        // Write the file into temporary path
        fs.writeFileSync("/tmp/uploaded-image.jpg", body.image, "base64", err => {
            // Console Error
            return response.status(500).json({ error: err })
        })
    })

    // Setting Variables
    const uuid = UUID()
    const bucket = googleConfig.bucket("snrfirebase.appspot.com");

    // Uploading the local image into google Storage
    bucket.upload("/tmp/uploaded-image.jpg", {
        uploadType: "media",
        destination: "/profile-image/" + uuid + ".jpg",
        metadata: {
            metadata: {
                contentType: "image/jpeg",
                firebaseStorageDownloadTokens: uuid
            }
        }
    },
        (err, file)=>{
            if(!err){
                response.status(201).json({
                    Imageurl:
                        "https://firebasestorage.googleapis.com/v0/b/"+
                        bucket.name + "/o/"+ encodeURIComponent(file.name) +
                        "?alt=media&token=" + uuid
                })
            }
            else{
                response.status(500).json({error:err})
            }
        }
    
    )
});
