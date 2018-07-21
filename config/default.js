module.exports = {
    port: 3000,
    session: {
        secret: 'nodeJsBlog',
        key: 'nodeJsBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/nodeJsBlog'
}