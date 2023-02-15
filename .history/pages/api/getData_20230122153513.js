import db from '../../models';

export default async (req, res) => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // create some dummy data

    // Select all from the database
    const data = await db.Checklist.findAll();

    // Return the data as a JSON to the client
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
