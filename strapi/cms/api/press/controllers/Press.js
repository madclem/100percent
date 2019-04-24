'use strict';

/**
 * Press.js controller
 *
 * @description: A set of functions called "actions" for managing `Press`.
 */

module.exports = {

  /**
   * Retrieve press records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.press.search(ctx.query);
    } else {
      return strapi.services.press.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a press record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.press.fetch(ctx.params);
  },

  /**
   * Count press records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.press.count(ctx.query);
  },

  /**
   * Create a/an press record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.press.add(ctx.request.body);
  },

  /**
   * Update a/an press record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.press.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an press record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.press.remove(ctx.params);
  }
};
