const testimonialRoute = require('express').Router();
const testimonial_controller = require('../controllers/testimonial_controller');
const response_controller = require('../controllers/response_controller');
const docinfo_controller = require('../controllers/docinfo_controller');


testimonialRoute.route('/testimonials')
  .get(
    testimonial_controller.getAllTestimonials,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
  )
  .post(
    testimonial_controller.addNewTestimonial,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
    )

    testimonialRoute.route('/testimonials/:id')
  .get(
    testimonial_controller.getOneTestimonial,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
  )
  .put(
    testimonial_controller.updateTestimonial,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
  )

  testimonialRoute.route('/testimonials/:id')
  .delete(
    testimonial_controller.deleteTestimonial,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
    )



module.exports = testimonialRoute;
