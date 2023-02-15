module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('checklist', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    material_name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    supplier_name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    method_of_inspection: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    material_received: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total_inspected: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total_pass: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total_failure: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    delivery_note: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    sample_inspected: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    delivery_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    inspection_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    filename: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    remark: {
      type: Sequelize.LONGTEXT,
      allowNull: true
    },
    isApproved: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isRejected: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  });
  return Checklist;
};
