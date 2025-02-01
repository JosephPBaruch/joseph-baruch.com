const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // ...existing code...
    plugins: [
        // ...existing plugins...
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/pages/Assets/me.jpeg', to: 'images/me.jpeg' },
                { from: 'src/pages/Assets/Resume.pdf', to: 'resume/Resume.pdf' }
            ]
        })
    ],
    // ...existing code...
};
