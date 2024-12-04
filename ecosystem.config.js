export const apps = [
    {
        script: 'server.js',
        watch: '.',
    },
    {
        script: './service-worker/',
        watch: ['./service-worker'],
    },
]
export const deploy = {
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
}
