

UPDATE checklisttest
SET approved_by = CONCAT(approved_by, ' -> ', 'Steven')
WHERE id=105;


ALTER TABLE checklisttest ADD COLUMN approved_by VARCHAR(50) DEFAULT 0;








 {item.status === 1 && item.status === 2 && item.status === 3 ? (
                  <div>
                    <p className="text-success mt-3">Approved on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
                ) : null}


{(user && user[ROLES].includes('MIT'))
      user[ROLES].includes('HNAD') ? ( ) : null}