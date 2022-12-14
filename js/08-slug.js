// Делаем slug в URL из название статьи (например dev.to)

const title = 'Top 10 benefits of React framework';

const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);