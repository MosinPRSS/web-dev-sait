const RandomSearchNames = [
    "Найти подходящую сантехнику...",
    "Широкий выбор отделочных материалов...",
    "Поиск по товарам...",
    "Пила циркулярная сетевая..."
]

export default function getRandomName() {
    return RandomSearchNames[Math.floor(Math.random() * (RandomSearchNames.length - 1))]
}