const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const courseSchema = new mongoose.Schema({
  course: {
    course_name: String,
    sections: [{
      section_name: String,
      contents: [{
        content_title: String,
        content_length: Number,
        is_vid: Boolean,
        has_preview: Boolean,
        vid_img: String,
      }],
    }],
  },
});

const Course = mongoose.model('Course', courseSchema);

const sampleData = [];

for (let i = 0; i < 100; i += 1) {
  sampleData.push({
    course: {
      course_name: faker.company.bs(),
      // sections: new Array(Math.floor(Math.random() * (15 - 5)) + 5).fill()
      sections: Array.from({ length: Math.floor(Math.random() * (15 - 5)) + 5 }, () => ({
        section_name: faker.company.catchPhrase(),
        contents: Array.from({ length: Math.floor(Math.random() * 10) }, () => ({
          content_title: faker.company.bs(),
          content_length: (Math.random() * 10),
          is_vid: Math.random() >= 0.5,
          has_preview: Math.random() >= 0.5,
          vid_img: faker.image.image(),
        })),
      })),
    },
  });
}

Course.insertMany(sampleData);

const readOne = (callback) => {
  Course.findOne({}).exec((err, res) => {
    callback(res);
  });
};

module.exports.readOne = readOne;
