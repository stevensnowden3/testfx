INSERT INTO checklist (material_name, supplier_name, method_of_inspection, material_received, total_inspected, total_pass, total_failure, delivery_note, sample_inspected, delivery_date, inspectiondate, filename, remark)
VALUES ('Screws', 'ABC Supplier', 'Visual Inspection', 1234, 100, 95, 5, 'DN1234', 'IN1234', '2020-09-30', '2020-09-29', 'screws.pdf', 'No remarks.'),










SELECT JSON_EXTRACT(roles, '$.admin') as is_admin, JSON_EXTRACT(roles, '$.editor') as is_editor FROM users WHERE email = 'user1@example.com' LIMIT 0, 25;