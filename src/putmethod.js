/*
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