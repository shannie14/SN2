// const { integrations } = require('googleapis/build/src/apis/integrations');
const { Schema, model } = require('mongoose');

const episodeSchema = new Schema(
    {
        titles: String,
        clip: String,
        talent: String
        //required, unique, trim  
    },
);

const Episode = model('Episode', episodeSchema);

module.exports = Episode;