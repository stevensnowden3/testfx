UPDATE checklisttest
SET approved_by = CONCAT(approved_by, ' -> ', 'Steven')
WHERE id=105;


ALTER TABLE checklisttest ADD COLUMN approved_by VARCHAR(50) DEFAULT 0;
