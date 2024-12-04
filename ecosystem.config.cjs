module.exports = {
    apps: [
        {
            name: 'my-app',
            script: './server.js',
            watch: true,
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },
    ],
    deploy: {
        production: {
            user: 'bitnami',
            host: '65.2.140.236',
            ref: 'origin/main',
            repo: 'https://github.com/MUHAMMADAZIZ008/product-catalog-api',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy':
                'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
        },
    },
}
