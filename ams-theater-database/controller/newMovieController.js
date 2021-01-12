const MoviesSchema = require("../models/movieSchema");
const CommentSchema = require("../models/commentSchema");

exports.addNewMovie = (req, res, next) => {
  console.log(req.body);

  const newMovie = new MoviesSchema({
    movie_title: req.body.movie_title,
    image: req.body.image,
    year: req.body.year,
    movie_type: req.body.movie_type,
    company: req.body.company,
    director: req.body.director,
    script_writer: req.body.script_writer,
    main_star: req.body.main_star,
    co_star: req.body.co_star,
    description: req.body.description,
  });

  newMovie
    .save()
    .then((response) => {
      res.status(200).json("New Movie Successfully Added");
      console.log(response);
    })
    .catch((err) => {
      res.status(400).send("couldn't add movies");
    });
};

exports.getMovies = (req, res, next) => {
  MoviesSchema.find()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("couldn't get movies");
    });
};

exports.detailMovie = (req, res, next) => {
  console.log(req.params.id);

  MoviesSchema.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("couldn't get movies");
    });
};

// GET THE COMMENT  AND POST IT

exports.getComment = (req, res, next) => {
  console.log("from the server ", req.params.id);
  MoviesSchema.findById(req.params.id)
    .then((result) => {
      console.log(result.comments);
      res.status(200).json(result.comments);
    })
    .catch((err) => {
      res.status(400).send("couldn't get comments");
    });
};

exports.addComment = (req, res, next) => {
  const comment = new CommentSchema();
  const { author, userComment } = req.body;

  if (!author || !userComment) {
    return res.json("You must provide an author and user comment");
  }
  MoviesSchema.findById(req.body.id).then((result) => {
    result.comments.push({
      author: req.body.author,
      userComment: req.body.userComment,
    });
    result.save();
    // console.log(result);
  });
  comment.save((err) => {
    if (err) return res.json("comment not posted!");
    return res.json("comment successfully posted!");
  });
  console.log(req.body);

  // MoviesSchema.findById(req.body.id).then((result) => {
  //   result.comments.push({
  //     author: req.body.author,
  //     userComment: req.body.userComment,
  //   });
  //   result.save();
  //   console.log(result)
  // });
};
