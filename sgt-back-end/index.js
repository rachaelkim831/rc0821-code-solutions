const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select * from grades
  `;
  db.query(sql)
    .then(data => {
      const grades = data.rows;
      res.status(201).json(grades);
    })
    .catch(err => {
      console.log('Get grades error:', err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  // destructuring
  const { course, name, score } = req.body;
  // const course = req.body.course;
  // const name = req.body.name;
  // const score= req.body.score;

  // TODO: Validate course, name, score
  if (!name) {
    return res.status(400).json({ error: '"name" input is required' });
  }
  if (!course) {
    return res.status(400).json({ error: '"course" input is required' });
  }
  if (!score) {
    return res.status(400).json({ error: '"score" input is required' });
  }
  if (isNaN(score) || score < 0 || score > 100) {
    return res.status(400).json({ error: '"score" input is invalid' });
  }

  const sql = `
  insert into "grades"
  ("name", "course", "score")
  values
  ($1, $2, $3)
  returning *
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      // const grade = data.rows[0];
      const [grade] = data.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      console.log('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const { course, name, score } = req.body;
  const gradeId = req.params.gradeId;
  if (!name) {
    return res.status(400).json({ error: '"name" input is required' });
  }
  if (!course) {
    return res.status(400).json({ error: '"course" input is required' });
  }
  if (!score) {
    return res.status(400).json({ error: '"score" input is required' });
  }
  if (isNaN(score) || score < 0 || score > 100) {
    return res.status(400).json({ error: '"score" input is invalid' });
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  `;
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(data => {
      if (data.rowCount === 0) {
        return res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      }
      if (data.rowCount === 1) {
        const params2 = [gradeId];
        const sql2 = `select * from grades
        where "gradeId" = $1`;
        db.query(sql2, params2)
          .then(data => {
            const grades = data.rows[0];
            res.status(200).json(grades);
          });
      }
    })
    .catch(err => {
      console.log('Update grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;

  if (gradeId <= 0 || isNaN(gradeId)) {
    return res.status(400).json({ error: '"gradeId" must be a positive integer' });
  }

  const sql = `
  delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(data => {
      if (data.rowCount === 0) {
        return res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      }
      res.sendStatus(204);
    })
    .catch(err => {
      console.log('Delete grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Server listening on PORT:3000');
});
