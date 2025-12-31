/*
        POST METHOD
        methods for HTTP POST requests
        in a restful API client the POST method is used to create a resource
        here we define a function to perform a POST request using fetch API
        to create a resource at a given URL with provided data we will be using various methods
        ***1. "db.create(data)" --> to create a single document with the provided data
                eg: db.create({name:"John",age:25}) created data will be returned
        ***2. "db.insertMany(data)" --> to create multiple documents with the provided data array
                eg: db.insertMany([{name:"John",age:25},{name:"Jane",age:30}]) created data will be returned as an array
        3. "db.save()" --> to save a document instance to the database
                eg: const doc = new Model({name:"John",age:25});

*/

/*
        GET METHOD
        methods for HTTP GET requests
        in a restful API client the GET method is used to retrieve a resource
        here we define a function to perform a GET request using fetch API
        to retrieve a resource at a given URL we will be using various methods
        ***1. "db.find()" --> to retrieve multiple documents that match the query criteria
                eg: db.find({age:{$gt:25}}) retrieved data will be returned as an array
        2. "db.findOne()" --> to retrieve a single document that matches the query criteria
                eg: db.findOne({name:"John"}) retrieved data will be returned as an object
        ***3. "db.findById(id)" --> to retrieve a document by its unique identifier
                eg: db.findById("64a7f8c9e4b0c2d5f6a7b8c9") retrieved data will be returned as an object


*/




/*      PUT METHOD
    methods for HTTP PUT requests
    in a restful API client the PUT method is used to update a resource
    here we define a function to perform a PUT request using fetch API
    to update a resource at a given URL with provided data we will be using various methods
    1. "db.FindOneAndUpdate(filter,data,{new:true})" in the backend to find a document and update it
            filter----> to find the document to be updated or to choose the data we are going to update
            data------> the new data to update the document within the specified filter
            {new:true}--> to return the updated document instead of the original document
    ***2. "db.FindByIdAndUpdate(id,data,{new:true})"
            id---------> to find the document by its unique identifier it will be obtained from the frontend
            data-------> the new data to update the document
    3. "db.UpdateMany(filter,data)"
            filter-----> to find multiple documents that match the filter criteria
            data-------> the new data to update the matched documents
    ***4. "db.UpdateOne(filter,data)"
            filter-----> to find a single document that matches the filter criteria
            data-------> the new data to update the matched document
*/

/*

        DELETE METHOD
        methods for HTTP DELETE requests\
        in a restful API client the DELETE method is used to delete a resource
        here we define a function to perform a DELETE request using fetch API
        to delete a resource at a given URL with provided identifier we will be using various methods
        1. "db.deleteOne(filter)" --> to delete a single document that matches the filter criteria
                eg: db.deleteOne({name:"John"}) deleted data won't be returned
        2. "db.findoneAndDelete(filter)" --> to find a single document that matches the filter criteria and delete it
                eg: db.findOneAndDelete({email:""})    Deleted data will be returned
        ***3. "db.findByIdAndDelete(id)" --> to find a document by its unique identifier and delete it
                eg: db.findByIdAndDelete("64a7f8c9e4b0c2d5f6a7b8c9")
        4. "db.deleteMany(filter)" --> to delete multiple documents that match the filter criteria
                eg: db.deleteMany({age:{$gt:30}})



*/