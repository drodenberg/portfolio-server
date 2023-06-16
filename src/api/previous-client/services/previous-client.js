'use strict';

/**
 * previous-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::previous-client.previous-client');
