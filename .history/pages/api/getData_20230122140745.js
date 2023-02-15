import db from '../../models';

export default async (req, res) => {
  try {
    // Select all from the database
    const rows = await db.checklist.findAll();

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
