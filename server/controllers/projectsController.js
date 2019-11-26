const express = require('express')

const projectsController = {}

projectsController.index = (req, res) => {
  const projects = [{
    title: 'Dashboard',
    slug: 'dashboard',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/2566888/screenshots/8181606/media/4f8ad5e04a07b45b206ef8e52f571245.png'
  },
  {
    title: 'Blog',
    slug: 'blog',
    tags: ['html', 'css', 'javascript', 'node'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/124454/screenshots/8173959/media/92d33067977a5f51fe131e50558b9f70.png'
  },
  {
    title: 'Mobile App',
    slug: 'mobile-app',
    tags: ['IOS', 'Swift'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/4859/screenshots/8170919/media/602a2d1fdeda3c046e33904d6cc74743.png'
  },
  {
    title: 'Blue Landing Page',
    slug: 'blue-landing-page',
    tags: ['html', 'css', 'javascript', 'Ruby On Rails'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/225019/screenshots/8172256/media/3c8b735515548c080fbbe914dc93cd5a.png'
  },
  {
    title: 'Restaurant',
    slug: 'restaurant',
    tags: ['html', 'css', 'javascript', 'Ruby On Rails'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/2119845/screenshots/6298751/lettuce.jpg'
  },
  {
    title: 'SaaS',
    slug: 'saas',
    tags: ['html', 'css', 'javascript', 'Ruby On Rails'],
    date: '3/12/2019',
    img: 'https://cdn.dribbble.com/users/2058952/screenshots/8175396/media/8f218bd100e82c4bf34cd27008465879.png'
  }]

  var testingVar = process.env.DB_USERNAME

  res.render('projects/index', {
    projects: projects,
    testingVar: testingVar
  })
}

projectsController.create = (req, res) => {
  res.render('projects/create')
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  res.render('projects/show')
}

projectsController.edit = (req, res) => {
  res.render('projects/edit')
}

projectsController.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}

module.exports = projectsController
