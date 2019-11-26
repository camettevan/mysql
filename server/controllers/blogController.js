const express = require('express')
const PostModel = require('../models/Post.js').model
const slugify = require('../global/slugify.js')

const blogController = {}

blogController.index = (req, res) => {

  // Find all the post
  PostModel.find({}, function(err, data) {
    if(err) {
      console.log('Error cannot find the posts')
    } else {
      console.log(data)
      res.render('blog/index', {
        posts: data
      })
    }
  })
}

blogController.show = (req, res) => {
  PostModel.find({slug: req.params.slug}, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      console.log(data)
      res.render('blog/show', {
        post: data[0]
      })
    }
  })
}

blogController.create = (req, res) => {
  res.render('blog/create')
}

blogController.store = (req, res) => {
  PostModel.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    img: req.body.img,
    slug: slugify(req.body.title)
  }, function(err, data) {
    if(err) {
      console.log('Error cannot save post')
    } else {
      console.log(data)
      res.redirect('/blog')
    }
  })
}

blogController.edit = (req, res) => {
  PostModel.find({slug: req.params.slug}, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      console.log(data)
      res.render('blog/edit', {
        post: data[0]
      })
    }
  })
}

blogController.update = (req, res) => {
  PostModel.update({
    _id: req.body._id
  },
  {
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    slug: slugify(req.body.title)
  }, function(err, data) {
    if(err) {
      console.log('Error cannot save post')
    } else {
      console.log('UPDATA DATA:=============================================')
      console.log(data)
      console.log('=========================================================')
      // res.redirect('/blog')
      res.redirect('/blog/' + slugify(req.body.title))
    }
  })
}

blogController.destroy = (req, res) => {
  PostModel.remove({slug: req.params.slug}, function(err, data) {
    if(err) {
      res.redirect('/blog')
      console.log('Error cannot delete post')
      console.log(err)
    } else {
      console.log('deleted')
      res.redirect('/blog')
    }
  })
}

module.exports = blogController
