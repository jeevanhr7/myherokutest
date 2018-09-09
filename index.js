var proxy = require('subdomain-router');
var app=require('./app');
var app2=require('./app2');
var app3=require('./app3');


proxy({
    host: 'shoppre.test',
    subdomains: {
        'sapi': 3000,             // 'example.com'             <=> localhost:10000
        'sops': 4000,            // 'www.example.com'         <=> localhost:10000
        'saccounts': 5000,           // 'blog.example.com'        <=> localhost:10001
        'smember': 6000,           // 'blog.example.com'        <=> localhost:10001
    }
}).listen(80);