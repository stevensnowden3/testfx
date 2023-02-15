import db from '../../models';
db.sequelize.sync();
const Checklist = db.Checklist;

export default async (req, res) => {
  try {
    await db.sequelize.authenticate();

    console.log('Connection has been established successfully.');

    // Select all from the database

    const user = await Checklist.findAll();

    res.status(200).json({ users });

    // Return the data as a JSON to the client
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error });
  }
};
