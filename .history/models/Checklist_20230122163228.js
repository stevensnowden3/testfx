import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('checklist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    material_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    supplier_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    method_of_inspection: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    material_received: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_inspected: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_pass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_failure: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delivery_note: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    invoice_note: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    inspection_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isRejected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  });
  return Checklist;
};
