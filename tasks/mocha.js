'use strict';

module.exports = {
    all: {
        options: {
            // run: false,
            reporter: 'Spec',
            urls: ['http://localhost:<%= Number(process.env.PORT || 9000) %>/index.html']
        }
    }
};
