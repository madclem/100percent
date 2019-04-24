'use strict';

/**
 * Speakers.js controller
 *
 * @description: A set of functions called "actions" for managing `Speakers`.
 */

module.exports = {

  /**
   * Retrieve speakers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.speakers.search(ctx.query);
    } else {
      return strapi.services.speakers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a speakers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.speakers.fetch(ctx.params);
  },

  /**
   * Count speakers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.speakers.count(ctx.query);
  },

  /**
   * Create a/an speakers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.speakers.add(ctx.request.body);
  },

  /**
   * Update a/an speakers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.speakers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an speakers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.speakers.remove(ctx.params);
  }
};
