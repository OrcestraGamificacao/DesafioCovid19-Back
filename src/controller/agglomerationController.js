const Agglomeration = require('../schemas/schemaAgglomeration');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async show(request, response) {
        const { latitude, longitude } = request.query;


        const agglomerations = await Agglomeration.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ agglomerations });
    },

    async index(request, response){
        const { latitude, longitude } = request.query;
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        let agglomeration = await Agglomeration.findOne({ location });
        
        return response.json({ agglomeration });
    },

    async store(request, response) {
        const { location_name, description, image_url, agglomeration_level, latitude, longitude } = request.body;
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        let agglomeration = await Agglomeration.findOne({ location });

        if (!agglomeration) {


            end_timestamp = new Date().setMinutes(60);
            active = true;
            votes_positive = 0;
            votes_negative = 0;


            agglomeration = await Agglomeration.create({
                location_name,
                description,
                image_url,
                agglomeration_level,
                end_timestamp,
                active,
                votes_positive,
                votes_negative,
                location,
            })


            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
            )

            sendMessage(sendSocketMessageTo, 'new-agglomeration', agglomeration);
        }
        return response.json({ agglomeration });
    },

    async update(request, response){

    }
}