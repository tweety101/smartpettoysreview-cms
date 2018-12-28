'use strict';

/**
 * Reviewpost.js controller
 *
 * @description: A set of functions called "actions" for managing `Reviewpost`.
 */

module.exports = {

  /**
   * Retrieve reviewpost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.reviewpost.search(ctx.query);
    } else {
      return strapi.services.reviewpost.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a reviewpost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.reviewpost.fetch(ctx.params);
  },

  /**
   * Count reviewpost records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.reviewpost.count(ctx.query);
  },

  /**
   * Create a/an reviewpost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.reviewpost.add(ctx.request.body);
  },

  /**
   * Update a/an reviewpost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.reviewpost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an reviewpost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.reviewpost.remove(ctx.params);
  }
};
