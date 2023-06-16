'use strict';

/**
 * personal-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-website.personal-website');
