const monday = `
Понедельник:

⏰ 9:55 — 11:25
Технический перевод
(ПЗ 2-14 н)
ЛК - 6 этаж

⏰ 11:35 — 13:05
Коммерческая оценка инвестиций
(Л 2 - 12 н)
Онищенко С.И.
ЛК - 402

⏰ 13:45 — 15:15
Технологический аудит
(П3 2-14 н)
Курочкин Д.А.
ЛК - 402
`;

const tuesday = `
Вторник:

⏰ 8:15 — 9:45
Проектное обучение
(2,4,6,8,10,12,14 н)
ЛК - 421

⏰ 9:55 — 11:25
Проектное обучение
(2,4,6,8,10,12,14 н)
ЛК - 421

⏰ 11:35 — 13:05
Проектное обучение
(2,4,6,8,10,12,14 н)
У - 216

⏰ 13:45 — 15:15
Проектное обучение
(2,4,6,8,10,12,14 н)
У - 216
`;
const wensday = `
Среда:

⏰ 8:15 — 9:45
Финансирование инновационной деятельности
(Л 2-16 н) (ПЗ 17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 9:55 — 11:25
Финансирование инновационной деятельности
(ПЗ 2-17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 11:35 — 13:05
Организация управления стартапом
Дегтярева В.В
ЛК - 402
---
Финансирование иновационной деятельности
(ПЗ 17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 13:45 — 15:15
Организация управления стартапом
(ПЗ 2-16 н)
Дегтярева В.В
ЛК - 402
---
Разработка стратегии продвижения иновационного продукта
(ПЗ 17 н)
Береговская Т.А.
ЛК - 402
`;
const thursday = `
Четверг:

⏰ 8:15 — 9:45
Разработка стратегии продвижения инновационного продукта
(Л 2-16 н) (ПЗ 17 н)
Береговская Т.А.
ЛК - 402

⏰ 9:55 — 11:25
Разработка стратегии продвижения инновационного продукта
(ПЗ 2-17 н)
Береговская Т.А.
ЛК - 402

⏰ 11:35 — 13:05
Физическая культура и спорт
(ПЗ) Спортивный комплекс

⏰ 13:45 — 15:15
Организация управления стартапом
(ПЗ 2-4 н)
Дегтярева В.В
ЛК - 108
`;
const friday = `
Пятница:

⏰ 8:15 — 9:45
Цифровые технологии управления инновационным проектом
(ЛЗ 4,6 н)
Гришин В.Н.
ЛК - 110

⏰ 9:55 — 11:25
Цифровые технологии управления инновационным проектом
(Л 2-16 н)
Гришин В.Н.
ЛК - 110

⏰ 11:35 — 13:05
Цифровые технологии управления инновационным проектом
(ЛЗ 2-16 н)
Гришин В.Н.
БЦ - 217

⏰ 13:45 — 15:15
Физическая культура и спорт
(Л 2 н) Актовый зал
---
Цифровые технологии управления инновационным проектом
(ЛЗ 4-16 н)
Гришин В.Н.
БЦ - 217
`;
const saturday = `
Суббота:

⏰ 11:35 — 13:05
Физическая культура и спорт
(П3) Спортивный комплекс

⏰ 13:45 — 15:15
Коммерческая оценка инвестиций
(ПЗ 1-12 н)
Онищенко С.И.
ЛК - 321
`;

const oddMonday = `
Понедельник:

⏰ 8:15 — 9:45
Технический перевод
(Л 3-13 н)
ЛК - 6 этаж

⏰ 9:55 — 11:25
Технический перевод
(Л 2-14 н)
ЛК - 6 этаж

⏰ 11:35 — 13:05
Цифровая логистика инновационного проекта
(ПЗ 3-15 н)
Зубаков Г.В.
ЛК - 109

⏰ 13:45 — 15:15
Технологический аудит
(ПЗ 2-14 н)
Курочкин Д.А.
ЛК - 402
`;
const oddTuesday = `
Вторник:

⏰ 9:55 — 11:25
Проектное обучение
(3,5,7,9,11,13,15 н)
ЛК - 421

⏰ 11:35 — 13:05
Проектное обучение
(3,5,7,9,11,13,15 н)
У - 216

⏰ 13:45 — 15:15
Проектное обучение
(3,5,7,9,11,13,15 н)
У - 216
`;
const oddWensday = `
Среда:

⏰ 8:15 — 9:45
Финансирование инновационной деятельности
(Л 2-16 н) (ПЗ 17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 9:55 — 11:25
Финансирование инновационной деятельности
(ПЗ 2-17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 11:35 — 13:05
Организация управления стартапом
(Л 2-16 н)
Дегтярева В.В.
ЛК - 402
---
Финансирование инновационной деятельности
(ПЗ 17 н)
Морковкин Д.Е.
ЛК - 402

⏰ 13:45 — 15:15
Организация управления стартапом
(ПЗ 2-16 н)
Дегтярева В.В.
ЛК - 402
---
Разработка стратегии продвижения инновационного продукта
(ПЗ 17 н)
Береговская Т.А.
ЛК - 402
`;
const oddThursday = `
Четверг

⏰ 8:15 — 9:45
Разработка стратегии продвижения инновационного продукта
(Л 2-16 н)(ПЗ 17 н)
Береговская Т.А.
ЛК - 402

⏰ 9:55 — 11:25
Разработка стратегии продвижения инновационного продукта
(ПЗ 2-17 н)
Береговская Т.А.
ЛК - 402

⏰ 11:35 — 13:05
Физическая культура и спорт
(ПЗ) Спортивный комплекс

⏰ 13:45 — 15:15
Разработка стратегии продвижения инновационного продукта
(ПЗ 17 н)
Береговская Т.А.
ЛК - 108
`;
const oddFriday = `
Пятница:

⏰ 9:55 — 11:25
Технологический аудит
(Л 3-13 н)
Курочкин Д.А.
ЛК - 110

⏰ 11:35 — 13:05
Цифровая логистика инновационного проекта
(Л 1-11 н)
Зубаков Г.В.
ЛК - 508

⏰ 13:45 — 15:15
Цифровая логистика инновационного проекта
(ПЗ 1-11 н)
Зубаков Г.В.
ЛК - 508
`;
const oddSaturday = `
Суббота:

⏰ 11:35 — 13:05
Физическая культура и спорт
(ПЗ) Спортивный комплекс

⏰ 13:45 — 15:15
Коммерческая оценка инвестиций
(ПЗ 1-12 н)
Онищенко С.И.
ЛК - 321
`;

module.exports.monday = monday;
module.exports.tuesday = tuesday;
module.exports.wensday = wensday;
module.exports.thursday = thursday;
module.exports.friday = friday;
module.exports.saturday = saturday;

module.exports.oddMonday = oddMonday;
module.exports.oddTuesday = oddTuesday;
module.exports.oddWensday = oddWensday;
module.exports.oddThursday = oddThursday;
module.exports.oddFriday = oddFriday;
module.exports.oddSaturday = oddSaturday;
