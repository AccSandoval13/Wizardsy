const db = require('../post')

db.Post.create([{
    user_name: 'Jake',
    pic: 'https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    tagline:'Water so good even Fido enjoys!'
}, {
    user_name: 'Michelle',
    pic: 'https://images.unsplash.com/photo-1680669158867-cc840299ec33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tagline: 'Out here enjoying nature!'
}])
.then (() => {
    console.log('Success!')
    process.exit()
})
.catch (err => {
    console.log('Failure!', err)
    process.exit()
})