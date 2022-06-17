[x] startup
    [x]npm install
    [x] npm run client/server
    [x] set up db w/ sql file
        [x]prime_feedback

[] feedback form - multi part
    [] how feeling
    [] how well understand content
    [] how well supported?
    [] any extra comments?
        [] all form data goes to redux store
            [] dispatch used w/o axios
        [] each part of form is its own client side route
        [] needs validation
            [] value must be proveided and conveyed to user
                [] all except comments, no validation here
    [] let user review their feedback
        [] can't make changes here
        [] all form inputs stored in client side state
            [] only post final results to DB

[] submition
    [] button to submit
        [] send to submission success page
    [] sends to DB in axios POST
    [] create a new server router for this
        [] should not need to create a GET though

components
    []form 1, 2, 3, 4
    [] review page
