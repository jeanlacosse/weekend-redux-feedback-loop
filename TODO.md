[x] startup
    [x]npm install
    [x] npm run client/server
    [x] set up db w/ sql file
        [x]prime_feedback

[] feedback form - multi part
    [x] how feeling
    [x] how well understand content
    [x] how well supported?
    [x] any extra comments?
        [x] all form data goes to redux store
            [x] dispatch used w/o axios
        [x] each part of form is its own client side route
        [x] needs validation
            [x] value must be proveided and conveyed to user
                [x] all except comments, no validation here
    [x] let user review their feedback
        [x] can't make changes here
        [x] all form inputs stored in client side state
            [x] only post final results to DB

[] submition
    [] button to submit
        [] send to submission success page
    [] sends to DB in axios POST
    [] create a new server router for this
        [] should not need to create a GET though

components
    [x]form 1, 2, 3, 4
    [x] review page 
