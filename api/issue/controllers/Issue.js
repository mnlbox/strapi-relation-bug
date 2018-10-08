'use strict';

/**
 * Issue.js controller
 *
 * @description: A set of functions called "actions" for managing `Issue`.
 */

module.exports = {

  /**
   * Retrieve issue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.issue.search(ctx.query);
    } else {
      return strapi.services.issue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a issue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.issue.fetch(ctx.params);
  },

  /**
   * Count issue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.issue.count(ctx.query);
  },

  /**
   * Create a/an issue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.issue.add(ctx.request.body);
  },

  /**
   * Update a/an issue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.issue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an issue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.issue.remove(ctx.params);
  }
};
