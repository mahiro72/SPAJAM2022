\c reiko_db;

INSERT INTO
	drink (name, best_time)
VALUES
	('お茶', 30),
	('ビール', 50),
	('スポドリ', 35),
	('コーラ', 40),
	('紅茶', 30);

INSERT INTO
	feedback (drink_id, cold_time, evaluate)
VALUES
	(1, 15, 0),
	(2, 35, 1),
	(3, 10, 2),
	(1, 10, 0);
