'use strict';

/**
 * Milestoneicons.js controller
 *
 * @description: A set of functions called "actions" for managing `Milestoneicons`.
 */

module.exports = {

  /**
   * Retrieve milestoneicons records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.milestoneicons.search(ctx.query);
    } else {
      return strapi.services.milestoneicons.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a milestoneicons record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.milestoneicons.fetch(ctx.params);
  },

  /**
   * Count milestoneicons records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.milestoneicons.count(ctx.query);
  },

  /**
   * Create a/an milestoneicons record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.milestoneicons.add(ctx.request.body);
  },

  /**
   * Update a/an milestoneicons record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.milestoneicons.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an milestoneicons record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.milestoneicons.remove(ctx.params);
  }
};
