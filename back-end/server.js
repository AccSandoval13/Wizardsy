const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

// Body Parser
app.use(express.json());

// Routes
const posts = require('./routes/posts');
app.use('/posts', posts);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
