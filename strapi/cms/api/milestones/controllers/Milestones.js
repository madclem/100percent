'use strict';

/**
 * Milestones.js controller
 *
 * @description: A set of functions called "actions" for managing `Milestones`.
 */

module.exports = {

  /**
   * Retrieve milestones records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.milestones.search(ctx.query);
    } else {
      return strapi.services.milestones.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a milestones record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.milestones.fetch(ctx.params);
  },

  /**
   * Count milestones records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.milestones.count(ctx.query);
  },

  /**
   * Create a/an milestones record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.milestones.add(ctx.request.body);
  },

  /**
   * Update a/an milestones record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.milestones.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an milestones record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.milestones.remove(ctx.params);
  }
};
