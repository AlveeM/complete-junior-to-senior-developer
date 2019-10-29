import express from 'express';
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import App from './App';

// ssr using react
const app = express();

app.use(express.static('/public'));

const robots = JSON.parse(fs.readFileSync('/public/robots.json', 'utf8'));
const RobofriendApp = React.createElement(App);

app.get('/', (request, response) => {
    response.render('index', {
        content: renderToString(RobofriendApp({data: robots}))
    })
})