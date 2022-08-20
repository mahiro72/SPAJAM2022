\c reiko_db;

INSERT INTO
	drink (name, best_time)
VALUES
	('コーラ', 15),
	('ビール', 15),
	('モンスター', 10);

INSERT INTO
	feedback (drink_id, cold_time, evaluate)
VALUES
	(1, 15, 0),
	(2, 35, 1),
	(3, 10, 2),
	(1, 10, 0);
