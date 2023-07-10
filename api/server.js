const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);
// server.use('/api/auth', authRouter);
server.use('/api/comments', commentsRouter);
server.use('/api/likes', likesRouter);


module.exports = server;